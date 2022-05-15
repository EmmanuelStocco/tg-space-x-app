import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

import {
    Container,
    ButtonNextScreen,
    DivViewNavbar,
    ImageScreen
} from './styles';
import { useEffect } from 'react';

export function NavbarNavigation({ currentRoute } :string) {
    const navigation = useNavigation<any>()
    const route = useRoute();


    function handleStarlinks(nameRoute:string) {
        navigation.navigate(nameRoute)
    } 

    useEffect(()=>{
        console.log(route); 
    }, []);
    
    return (

        <DivViewNavbar>

            <View style={{ flexDirection: 'row', marginBottom: 'auto', marginTop: 'auto' }}>
                <ButtonNextScreen onPress={() => handleStarlinks('Home')} style={{ backgroundColor: currentRoute == 'rocket' ? '#e1ac3a' : '#fff'}}>
                    <ImageScreen name={'rocket'}  />
                </ButtonNextScreen>

                <ButtonNextScreen onPress={() => handleStarlinks('Starlinks')} style={{ backgroundColor: currentRoute == 'sattelite' ? '#e1ac3a' : '#fff'}}>
                    <ImageScreen name={'satellite-variant'}  />
                </ButtonNextScreen>

                <ButtonNextScreen onPress={() => handleStarlinks('Dragons')} style={{ backgroundColor: currentRoute == 'dragons' ? '#e1ac3a' : '#fff'}}>
                    <ImageScreen name={'firework'} />
                </ButtonNextScreen>

                <ButtonNextScreen onPress={() => handleStarlinks('Crews')} style={{ backgroundColor: currentRoute == 'crews' ? '#e1ac3a' : '#fff'}}> 
                    <ImageScreen name={'account-group'} />
                </ButtonNextScreen>

                <ButtonNextScreen onPress={() => handleStarlinks('Company')} style={{ backgroundColor: currentRoute == 'company' ? '#e1ac3a' : '#fff'}}>
                    <ImageScreen name={'domain'} />
                </ButtonNextScreen>
            </View>

        </DivViewNavbar>
    );
}