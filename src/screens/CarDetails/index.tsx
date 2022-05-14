import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
                           
import { BackButton } from '../../components/BackButton'; 
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg' 
import { getAccessoryIcon } from '../../utils/getAccesoryIcon';

                          
import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Acessories,
    Footer,


} from './styles';
import { CarDTO } from '../../dtos/CarDTO';

interface Params{
    car: CarDTO;
}
                          
export function CarDetails(){
    const navigation = useNavigation<any>();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleConfirmRental(){ 
        navigation.navigate('Scheduling', { car })
     }

    function handleReturn(){
        navigation.goBack()
    }
                          
   return ( 
           <Container>
                <Header>
                    <BackButton onPress={handleReturn} /> 
                </Header>   

            <CarImages>
                <ImageSlider  imagesUrl={car.photos} />
            </CarImages>       

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                   <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent> 
                </Details>

                <Acessories>
                    {
                        car.accessories.map(accessory => (
                            <Acessory
                                 key={accessory.type}
                                 name={accessory.name} 
                                 icon={getAccessoryIcon(accessory.type)}/>
                        ))
                    } 
                 </Acessories>

                <About>
                  {car.about}
                </About>
            </Content>

            <Footer>
                <Button title='Escolher periodo do aluguel' color='' onPress={handleConfirmRental} />
            </Footer>

           </Container>
  
      ); 
    }