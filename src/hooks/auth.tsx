/* eslint-disable no-unused-vars */
import React, {
  createContext, useState, useContext, useEffect,
} from 'react';
import { database } from '../database';
import { User as UserModel } from '../database/model/User';
import { api } from '../services/api';

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<User>({} as User);

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post('sessions', { email, password });

      const { token, user } = response.data as AuthResponse;

      // eslint-disable-next-line dot-notation
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const userCollection = database.get<UserModel>('users');
      await database.write(async () => {
        await userCollection.create((newUser) => {
          // eslint-disable-next-line no-param-reassign
          newUser.id = user.id;
          // eslint-disable-next-line no-param-reassign
          newUser.name = user.name;
          // eslint-disable-next-line no-param-reassign
          newUser.email = user.email;
          // eslint-disable-next-line no-param-reassign
          newUser.driver_license = user.driver_license;
          // eslint-disable-next-line no-param-reassign
          newUser.token = token;
        });
      });

      setData({ ...user, token });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const signOut = async () => {
    try {
      const userCollection = database.get<UserModel>('users');
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);

        await userSelected.destroyPermanently();

        setData({} as User);
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    (async () => {
      const userCollection = database.get<UserModel>('users');
      const response = await userCollection.query().fetch();
      // eslint-disable-next-line no-console
      // console.log('watermelondb response: ', response);

      if (response.length > 0) {
        // has user
        // eslint-disable-next-line no-underscore-dangle
        const userData = response[0]._raw as unknown as UserModel;
        // eslint-disable-next-line dot-notation
        api.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;

        setData(userData);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
