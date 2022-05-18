import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg' 
import { NavbarNavigation } from '../../components/NavbarNavigation';
import Space from '../../assets/Space.svg'

import { CarDTO } from '../../dtos/CarDTO';  
import { Load } from '../../components/Load';
import RocketP from '../../assets/RocketP.png'

import { getStarlinksService } from '../../services/Starlinks';
import { Starlink } from '../../components/Starlink';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent, 
    MyCarsButtom, 
} from './styles';


export function StarlinkView() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation<any>()
    const theme = useTheme(); 
    const [openModal, setOpenModal] = useState<boolean>(false);

    const [starlinksList, setStarlinksList] = useState<any[]>();

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars() {
        navigation.navigate('MyCars')
    }
    function handleOpenModal(value :boolean){
        setOpenModal(value);
   }

    useEffect(() => { 

        async function runGetService() {
            try {
                const res = await getStarlinksService();
                setStarlinksList(res.data)
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
                    <TouchableOpacity style={{ width: 30, height:30}} onPress={()=> handleOpenModal(!openModal)}>
                        <Image source={RocketP} style={{  width: 30, height:30}}></Image>
                    </TouchableOpacity>  

                    <TotalCars>
                        Total de {starlinksList?.length} Starlinks
                    </TotalCars>
                </HeaderContent>
            </Header>
            
            {loading ? <Load /> : 

                <FlatList
                    data={starlinksList}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) =>
                       <Starlink data={item} />
                    }
                    showsVerticalScrollIndicator={false}
                    style={{backgroundColor: '#f2f2f2', padding: 24}}
                /> 
            }

            {/* <MyCarsButtom onPress={handleOpenMyCars}>
                <Ionicons
                    name="ios-car-sport"
                    size={32}
                    color={theme.colors.shape}

                />
            </MyCarsButtom> */}

            <NavbarNavigation currentRoute={'sattelite'} />
        </Container>

    );

}