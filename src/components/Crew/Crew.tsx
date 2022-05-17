import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { Linking } from 'react-native';

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
    TextButton,
    ButtonRedirectWikipedia,
} from './styles';

import { CrewTypes } from './types'


export function Crew({ data, ...rest }: CrewTypes) {  
    const valuewikipedia = data.wikipedia;

    async function redirectWikipedia(link :string){
        Linking.openURL(link)
    }

    return ( 

        <Container style={{
            shadowColor: "#000", shadowOffset: { width: 0, height: 4, },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 8,
            backgroundColor: 'white',
            flexDirection: 'row'
        }}>
               <RocketImage
                source={{ uri: data.image }}
                resizeMode="contain" //autoajuste para imagens acima    
            /> 

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
                            <Diameter>{data.status ? 'ativo' : 'inativo'}</Diameter>
                        </ViewDiameter>

                        <ViewDiameter style={{ flexDirection: 'column', marginTop: 5}}>
                            <TitleDiameter> Quer saber mais? </TitleDiameter>
                            {/* <Diameter>{data.wikipedia}</Diameter> */}
                            {/**Link react native diminuido */}
                            <ButtonRedirectWikipedia onPress={() => redirectWikipedia(data.wikipedia)}>
                                <TextButton> Clique aqui </TextButton>
                            </ButtonRedirectWikipedia>
                         </ViewDiameter>
 
                    </Rent> 
                </About> 
            </Details>

         
        </Container>
    );
}