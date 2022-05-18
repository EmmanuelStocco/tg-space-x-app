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

import { DragonTypes } from './types'
import { DragonContextModal } from '../DragonContextModal';


export function Dragon({ data, ...rest }: DragonTypes) {
    //console.log(data);
    console.log(data.name);
    const [modalActive, setModalActive] = useState<boolean>(false);

    return (
        
        <Container 
        onPress={()=> setModalActive(true)}
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

             {/* Modal cards */}
             <Modal
                animationType='fade'
                transparent={true}
                visible={modalActive}
                onRequestClose={() => setModalActive(false)}
            >
                <TouchableOpacity onPress={() => setModalActive(false)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 4, width: 300, height: 350, alignItems: 'center' }}>
                        <DragonContextModal 
                             name={data.name}
                             otherPhoto={data.flickr_images[1] ?? data.flickr_images[0]}
                             material={data.heat_shield.material}
                             trunk={data.trunk.trunk_volume.cubic_meters}
                             drayMass={data.dry_mass_kg}
                             orbit_duration_yr={data.orbit_duration_yr}
                             firstFly={data.first_flight}


                        />
                        
                    </View>
                </TouchableOpacity>
            </Modal>
        </Container>
    );
}