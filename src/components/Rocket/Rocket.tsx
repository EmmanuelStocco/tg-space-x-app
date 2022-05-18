import React, { useState } from 'react';

import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

import { RocketTypes } from './types'


export function Rocket({ data, ...rest }: RocketTypes) {
    const [modalActive, setModalActive] = useState<boolean>(false);

    return (

        <Container
            onPress={() => setModalActive(true)}
            style={{
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
                            <TitleDiameter>Diametro: </TitleDiameter>
                            <Diameter>{data.diameter.meters}</Diameter>
                        </ViewDiameter>

                        <ViewDiameter>
                            <TitleDiameter>Massa: </TitleDiameter>
                            <Diameter>{data.mass.kg}</Diameter>
                        </ViewDiameter>

                        <ViewDiameter>
                            <TitleDiameter>Primeiro Voo: </TitleDiameter>
                            <Diameter>{moment(data.first_flight).format("DD/MM/YYYY")}</Diameter>
                        </ViewDiameter>

                    </Rent>
                </About>
            </Details>

            <RocketImage
                source={{ uri: data.flickr_images[0] }}
                resizeMode="contain" //autoajuste para imagens acima    
            />

            <Modal
                animationType='fade'
                transparent={true}
                visible={modalActive}
                onRequestClose={() => setModalActive(false)}
            >
                <TouchableOpacity onPress={() => setModalActive(false)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 4, padding: 12, width: 300, height: 300, alignItems: 'center' }}>
                        
                    </View>
                </TouchableOpacity>
            </Modal>


        </Container>
    );
}