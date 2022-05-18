import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import {
    Container,
    BlockOne, BlockTwo, Details, ImageRocket, TextBlock, TextPropellant, TextTOP
} from './styles';

export function DragonContextModal({ orbit_duration_yr, firstFly, name, fuelTwo, otherPhoto, material, trunk, drayMass, fuelOne }: any) {
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
                        <TextBlock>Material: {material}</TextBlock>
                        <TextBlock>Porta Malas: {trunk}</TextBlock>
                        <TextBlock>Massa seca: {drayMass}</TextBlock>

                    </BlockTwo>

                    <BlockTwo>
                    <TextBlock>Primeiro Vôo: {firstFly}</TextBlock>
                        <TextBlock>Orgita duração {orbit_duration_yr} anos </TextBlock>
                        {/* <TextPropellant>- {fuelOne}</TextPropellant>
                        <TextPropellant>- {fuelTwo}</TextPropellant> */}

                    </BlockTwo>

                </View>
            </Details>
        </Container>

    );

}