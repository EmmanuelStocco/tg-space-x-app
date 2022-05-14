import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Ionicons } from '@expo/vector-icons'

import Logo from '../../assets/logo.svg'
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import { getCompanyService } from '../../services/Comapany';
import { getCrewService } from '../../services/Crew';
import { getDragonsService } from '../../services/Dragons/'; 
import { getRocketsService } from '../../services/Rockets';
import { getStarlinksService } from '../../services/Starlinks';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList,
    MyCarsButtom
} from './styles';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { CarDetails } from '../CarDetails';
import { useTheme } from 'styled-components';


export function Home() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation<any>()
    const theme = useTheme();

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars() {
        navigation.navigate('MyCars')
    }


    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        async function runGetServiceCompany() {
            const res = await getCompanyService();
            console.log('res');
            console.log(res);
        }

        fetchCars();
        runGetServiceCompany();
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
                <CarList
                    data={cars}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) =>
                        <Car data={item} onPress={() => handleCarDetails(item)}
                        />}
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