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

import { StarlinkTypes } from './types'


export function Starlink({ data, ...rest }: StarlinkTypes) {
    //console.log(data);
    console.log(data);
    
    return ( 
        <Container style={{
            shadowColor: "#000", shadowOffset: { width: 0, height: 4, },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 8,
            backgroundColor: 'white'
        }}>
            <Details>
                <Name>{data.spaceTrack.OBJECT_NAME}</Name>

                <About>
                    <Rent>
                        <ViewDiameter>
                            <TitleDiameter>Inclinação: </TitleDiameter>
                            <Diameter>{data?.INCLINATION}</Diameter>
                        </ViewDiameter>

                        <ViewDiameter>
                            <TitleDiameter>EXCENTRICIDADE: </TitleDiameter>
                            <Diameter>{data?.ECCENTRICITY}</Diameter>
                        </ViewDiameter>

                        <ViewDiameter>
                            <TitleDiameter>Data de criação: </TitleDiameter>
                            <Diameter>{moment(data?.CREATION_DATE).format("DD/MM/YYYY")}</Diameter>
                        </ViewDiameter>
 
                    </Rent> 
                </About> 
            </Details>

            {/* <RocketImage
                source={{ uri: data.flickr_images[0] }}
                resizeMode="contain" //autoajuste para imagens acima    
            /> */}
        </Container>
    );
}