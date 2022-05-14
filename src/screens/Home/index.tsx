import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, CommonActions } from '@react-navigation/native';
import { CarDetails } from '../CarDetails';
import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg'
import api from '../../services/api';

import { CarDTO } from '../../dtos/CarDTO'; 
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import { getRocketsService } from '../../services/Rockets';

import { Rocket } from '../../components/Rocket/Rocket';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList,
    MyCarsButtom,
    RocketsList
} from './styles';

import { Diameter } from './types'



export function Home() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation<any>()
    const theme = useTheme();

    const [diameter, setDiamter] = useState<Diameter>();
    const [primaryFlight, setPrimaryFlight] = useState<number>();
    const [mass, setMass] = useState<number>();
    const [imageRocket, setImageRocket] = useState<string>();
    const [rocketName, setRocketName] = useState<string>();

    const [rocketsList, setRocketsList] = useState<any[]>();

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars() {
        navigation.navigate('MyCars')
    }


    useEffect(() => {
        // async function fetchCars() {
        //     try {
        //         const response = await api.get('/cars');
        //         setCars(response.data) 
        //     } catch (error) {
        //         console.log(error)
        //     } finally {
        //         setLoading(false)
        //     }
        // }

        async function runGetServiceRockets() {
            try {
                const res = await getRocketsService();
                setRocketsList(res.data)
            } catch (error) {
                console.log('my error');
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        //fetchCars();
        runGetServiceRockets();
    }, []);

     

    return (
        <Container>
            <StatusBar
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <TotalCars>
                        Total de {cars.length} Carros
                    </TotalCars>
                </HeaderContent>
            </Header>
            
            {loading ? <Load /> :
                // <CarList
                //     data={cars}
                //     keyExtractor={item => String(item.id)}
                //     renderItem={({ item }) =>
                //         <Car data={item} onPress={() => handleCarDetails(item)}
                //         />}
                // />

                <FlatList
                    data={rocketsList}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) =>
                       <Rocket data={item} />
                    }
                    showsVerticalScrollIndicator={false}
                    style={{backgroundColor: '#f2f2f2', padding: 24}}
                /> 
            }

            <MyCarsButtom onPress={handleOpenMyCars}>
                <Ionicons
                    name="ios-car-sport"
                    size={32}
                    color={theme.colors.shape}

                />
            </MyCarsButtom>

        </Container>

    );

}