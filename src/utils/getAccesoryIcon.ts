import speedSvg from '../assets/speed.svg'
import acellerationSvg from '../assets/acceleration.svg'
import forceSvg from '../assets/force.svg'
import gasolineSvg from '../assets/gasoline.svg'
import exchangeSvg from '../assets/exchange.svg'
import peopleSvg from '../assets/people.svg'
import hybridSvg from '../assets/hybrid.svg'
import engergySvg from '../assets/energy.svg'
import CarSvg from '../assets/car.svg'

export function getAccessoryIcon(type: string) {
    switch (type) {
        case 'speed':
            return speedSvg;

        case 'accelaration':
            return acellerationSvg;

        case 'turning_diameter':
            return forceSvg;

        case 'gasoline_motor':
            return gasolineSvg;

        case 'eletric_motor':
            return engergySvg;

        case 'hybrid_motor':
            return hybridSvg;
        
        case 'exchange':
            return exchangeSvg;

        case 'seats':
            return peopleSvg;
 
        default:
            return CarSvg
    }
}