import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import {
    Container,
    ImageRocket,
    Details,
    BlockTwo,
    BlockOne,
    TextBlock,
    TextTOP,
    TextPropellant
} from './styles';

interface Props {
    name: string;
    heigth: any;
    thrust_vacuum: string;
    propellant: string;
}

export function HomeContextModal({ name, heigth, propellant_2, version, thrust_vacuum, propellant, otherPhoto }: any) {

    const theme = useTheme();
    return (

        <Container>
            <ImageRocket
                source={{ uri: otherPhoto }} 
            />


            <Details>
                <BlockOne>
                    <TextTOP> {name}</TextTOP>
                </BlockOne>
                <View style={{ flexDirection: 'row' }}>


                    <BlockTwo>
                        <TextBlock>Altura: {heigth}</TextBlock>
                        <TextBlock>vácuo EMPX: {thrust_vacuum}</TextBlock>
                        <TextBlock>Versão: {version}</TextBlock>

                    </BlockTwo>

                    <BlockTwo>
                         <TextBlock>Propulsores:</TextBlock>
                         <TextPropellant>{propellant}</TextPropellant>
                         <TextPropellant>{propellant_2}</TextPropellant>
                        
                    </BlockTwo>

                </View>
            </Details>

        </Container>

    );

}