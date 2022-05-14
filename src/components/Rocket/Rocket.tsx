import React from 'react';
                          
import { StyleSheet, Text, View } from 'react-native';
                          
import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    RocketImage,
} from './styles';

import {RocketTypes} from './types'

                          
export function Rocket({ data, ...rest} :RocketTypes){    
    //console.log(data);
     
   return (
           <Container style={{backgroundColor: 'white'}}>
                  {/* <Details>
                   <Brand> {data.brand} </Brand>
                   <Name>{data.name}</Name>
    
                <About>
                    <Rent>
                        <Period>{data.rent.period} </Period>
                        <Price>{`R$ ${data.rent.price}`} </Price>
                    </Rent>

                    <Type>
                        <MotorIcon />
                    </Type>
                </About>
               </Details> */}

               <RocketImage 
                    //source={{ uri: data.flickr_images[0]}}
                    source={{ uri: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80'}}
            
                    resizeMode="contain" //autoajuste para imagens acima    
             />              
           </Container>
      );     
    }