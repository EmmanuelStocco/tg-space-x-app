import React, { useState } from 'react';

import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import { HomeContextModal } from '../HomeContextModal';

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

            {/* Modal cards */}
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalActive}
                onRequestClose={() => setModalActive(false)}
            >
                <TouchableOpacity onPress={() => setModalActive(false)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 4, width: 300, height: 350, alignItems: 'center' }}>
                        <HomeContextModal 
                            heigth={data.height.meters}
                            name={data.name}
                            propellant={data.engines.propellant_1}
                            thrust_vacuum={data.engines.thrust_vacuum.kN}
                            version={data.engines.version}
                            propellant_2={data.engines.propellant_2}
                            otherPhoto={data.flickr_images[1] ?? data.flickr_images[0]}
                           
                        />
                    </View>
                </TouchableOpacity>
            </Modal>

            

        </Container>
    );
}