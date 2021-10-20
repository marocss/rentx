import React, { useEffect, useState } from 'react';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

import {
  Container,
} from './styles';

// interface MyCarsProps {
// }

export const MyCars = () => {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const userId = 1
        const response = await api.get<CarDTO[]>(`schedules_byuser?user_id=${userId}`)
        
        setCars(response.data)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false)
      }

    })()

    // return () => {
    //   cleanup
    // }
  }, [])


  return (
    <Container>
    </Container>
  )
}