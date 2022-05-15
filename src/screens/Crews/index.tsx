import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg' 
import { NavbarNavigation } from '../../components/NavbarNavigation';
import Space from '../../assets/Space.svg'
import { CarDTO } from '../../dtos/CarDTO';  
import { Load } from '../../components/Load';
 
import { getCrewService } from '../../services/Crew';
import { Crew } from '../../components/Crew';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent, 
    MyCarsButtom, 
} from './styles';


export function CrewsViews() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation<any>()
    const theme = useTheme(); 

    const [crewsList, setCrewsList] = useState<any[]>();

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars() {
        navigation.navigate('MyCars')
    }


    useEffect(() => { 
        async function runGetService() {
            try {
                const res = await getCrewService();
                setCrewsList(res.data)
            } catch (error) {
                console.log('my error');
                console.log(error);
            } finally {
                setLoading(false)
            }
        } 
        runGetService();
    }, []);

     

    return (
        <Container>
            <StatusBar
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <HeaderContent>
                    <Space
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <TotalCars>
                        Total de {crewsList?.length} Tripulantes Dragons
                    </TotalCars>
                </HeaderContent>
            </Header>
            
            {loading ? <Load /> : 

                <FlatList
                    data={crewsList}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) =>
                       <Crew data={item} />
                    }
                    showsVerticalScrollIndicator={false}
                    style={{backgroundColor: '#f2f2f2', padding: 24}}
                /> 
            } 
            <NavbarNavigation />
        </Container>

    );

}