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

import { CompanyCartonTypes } from './types'


export function CompanyCarton({ data, ...rest }: CompanyCartonTypes) {
    //console.log(data);
    console.log(data.name);
    
    return (
        <Text> Company </Text>

        // <Container style={{
        //     shadowColor: "#000", shadowOffset: { width: 0, height: 4, },
        //     shadowOpacity: 0.30,
        //     shadowRadius: 4.65,
        //     elevation: 8,
        //     backgroundColor: 'white'
        // }}>
        //     <Details>
        //         <Name>{data.name}</Name>

        //         <About>
        //             <Rent>
        //                 <ViewDiameter>
        //                     <TitleDiameter>Diametro: </TitleDiameter>
        //                     <Diameter>{data.diameter.meters}</Diameter>
        //                 </ViewDiameter>

        //                 <ViewDiameter>
        //                     <TitleDiameter>Massa: </TitleDiameter>
        //                     <Diameter>{data.mass.kg}</Diameter>
        //                 </ViewDiameter>

        //                 <ViewDiameter>
        //                     <TitleDiameter>Primeiro Voo: </TitleDiameter>
        //                     <Diameter>{moment(data.first_flight).format("DD/MM/YYYY")}</Diameter>
        //                 </ViewDiameter>
 
        //             </Rent> 
        //         </About> 
        //     </Details>

        //     <RocketImage
        //         source={{ uri: data.flickr_images[0] }}
        //         resizeMode="contain" //autoajuste para imagens acima    
        //     />
        // </Container>
    );
}