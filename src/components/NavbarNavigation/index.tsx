import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    ButtonNextScreen,
    DivViewNavbar,
    ImageScreen
} from './styles';

export function NavbarNavigation() {
    const navigation = useNavigation<any>()


    function handleStarlinks(nameRoute :string) {
        navigation.navigate(nameRoute)
    }
    return (

        <DivViewNavbar>

            <View style={{ flexDirection: 'row', marginBottom: 'auto', marginTop: 'auto' }}>
                <ButtonNextScreen onPress={() => handleStarlinks('Home')}>
                    <ImageScreen name={'rocket'}  />
                </ButtonNextScreen>

                <ButtonNextScreen onPress={() => handleStarlinks('Starlinks')}>
                    <ImageScreen name={'satellite-variant'}  />
                </ButtonNextScreen>

                <ButtonNextScreen onPress={() => handleStarlinks('Dragons')}>
                    <ImageScreen name={'firework'} />
                </ButtonNextScreen>

                <ButtonNextScreen onPress={() => handleStarlinks('Crews')}> 
                    <ImageScreen name={'account-group'} />
                </ButtonNextScreen>

                <ButtonNextScreen onPress={() => handleStarlinks('Company')}>
                    <ImageScreen name={'domain'} />
                </ButtonNextScreen>
            </View>

        </DivViewNavbar>
    );
}