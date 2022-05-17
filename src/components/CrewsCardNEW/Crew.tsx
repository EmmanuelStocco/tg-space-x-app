import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Diameter,
    Price,
    Type,
    RocketImage,
    ViewDiameter,
    TitleDiameter,

} from './styles';

import { CrewTypes } from './types'


export function Crew({ data, ...rest }: CrewTypes) {  
    
    return ( 

        <Container style={{
            shadowColor: "#000", shadowOffset: { width: 0, height: 4, },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 8,
            backgroundColor: 'white'
        }}>
            <Details>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <ViewDiameter>
                            <TitleDiameter>Agencia: </TitleDiameter>
                            <Diameter>{data.agency}</Diameter>
                        </ViewDiameter>

                        <ViewDiameter>
                            <TitleDiameter>Status: </TitleDiameter>
                            <Diameter>{data.status}</Diameter>
                        </ViewDiameter>

                        <ViewDiameter>
                            <TitleDiameter>Mais informações: </TitleDiameter>
                            {/* <Diameter>{data.wikipedia}</Diameter> */}
                            {/**Link react native diminuido */}
                        </ViewDiameter>
 
                    </Rent> 
                </About> 
            </Details>

            <RocketImage
                source={{ uri: data.image }}
                resizeMode="contain" //autoajuste para imagens acima    
            />
        </Container>
    );
}