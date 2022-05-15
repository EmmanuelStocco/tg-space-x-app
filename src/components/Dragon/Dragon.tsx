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

import { DragonTypes } from './types'


export function Dragon({ data, ...rest }: DragonTypes) {
    //console.log(data);
    console.log(data.name);
    
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
                            <TitleDiameter>Tipo de nave: </TitleDiameter>
                            <Diameter>{data.thrusters.type}</Diameter>
                        </ViewDiameter>

                        <ViewDiameter>
                            <TitleDiameter> Peso da nave: </TitleDiameter>
                            <Diameter>{data.return_payload_mass.kg}</Diameter>
                        </ViewDiameter>

                        <ViewDiameter>
                            <TitleDiameter> Dev Parceiros: </TitleDiameter>
                            <Diameter>{data.heat_shield.dev_partner}</Diameter>
                        </ViewDiameter>

                        <ViewDiameter>
                            <TitleDiameter> Pressurização: </TitleDiameter>
                            <Diameter>{data.pressurized_capsule.payload_volume.cubic_meters} mtc</Diameter>
                        </ViewDiameter>



                        {/* <ViewDiameter>
                            <TitleDiameter>Desenvolvedor parceiro </TitleDiameter>
                            <Diameter>{moment(data.first_flight).format("DD/MM/YYYY")}</Diameter>
                        </ViewDiameter> */}
 
                    </Rent> 
                </About> 
            </Details>

            <RocketImage
                source={{ uri: data.flickr_images[0] }}
                resizeMode="contain" //autoajuste para imagens acima    
            />
        </Container>
    );
}