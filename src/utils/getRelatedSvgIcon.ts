import AccelerateSvg from '../assets/acceleration.svg'
import CarSvg from '../assets/car.svg'
import ElectricSvg from '../assets/energy.svg'
import ExchangeSvg from '../assets/exchange.svg'
import ForceSvg from '../assets/force.svg'
import GasSvg from '../assets/gasoline.svg'
import HybridSvg from '../assets/hybrid.svg'
import PeopleSvg from '../assets/people.svg'
import SpeedSvg from '../assets/speed.svg'

export const getRelatedSvgIcon = (type: string) => {
  switch (type) {
    case 'acceleration':
      return AccelerateSvg  
    case 'electric':
      return ElectricSvg 
    case 'electric_motor':
      return ElectricSvg 
    case 'exchange':
      return ExchangeSvg
    case 'turning_diameter':
      return ForceSvg
    case 'gasoline_motor':
      return GasSvg
    case 'hybrid_motor':
      return HybridSvg
    case 'seats':
      return PeopleSvg
    case 'speed':
      return SpeedSvg  
    default:
      return CarSvg
  }
}