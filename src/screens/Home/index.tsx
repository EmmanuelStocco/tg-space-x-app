import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg'

import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';

import { getRocketsService } from '../../services/Rockets';

import { Rocket } from '../../components/Rocket/Rocket';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    MyCarsButtom,
    DivViewNavbar,
    ImageScreen,
    ButtonNextScreen
} from './styles';


export function Home() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation<any>()
    const theme = useTheme();

    const [rocketsList, setRocketsList] = useState<any[]>();

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars() {
        navigation.navigate('MyCars')
    }

    function handleStarlinks() {
        navigation.navigate('Starlinks')
    }


    useEffect(() => {

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

                <FlatList
                    data={rocketsList}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) =>
                        <Rocket data={item} />
                    }
                    showsVerticalScrollIndicator={false}
                    style={{ backgroundColor: '#f2f2f2', padding: 24 }}
                />
            }



            <DivViewNavbar>

 
                {/* <MyCarsButtom onPress={handleOpenMyCars}>
                    <Ionicons
                        name="ios-car-sport"
                        size={32}
                        color={theme.colors.shape}

                    />
                </MyCarsButtom> */}
                

            <View style={{flexDirection: 'row', marginBottom: 'auto', marginTop: 'auto'}}>
               <ButtonNextScreen onPress={handleStarlinks}> 
                   <ImageScreen source={{uri: 'https://previews.123rf.com/images/rdesign0209/rdesign02091906/rdesign0209190602590/126200255-coin-icon.jpg'}} />
               </ButtonNextScreen>

               <ButtonNextScreen> 
                   <ImageScreen source={{uri: 'https://previews.123rf.com/images/rdesign0209/rdesign02091906/rdesign0209190602590/126200255-coin-icon.jpg'}} />
               </ButtonNextScreen>

               <ButtonNextScreen> 
                   <ImageScreen source={{uri: 'https://previews.123rf.com/images/rdesign0209/rdesign02091906/rdesign0209190602590/126200255-coin-icon.jpg'}} />
               </ButtonNextScreen>

               <ButtonNextScreen> 
                   <ImageScreen source={{uri: 'https://previews.123rf.com/images/rdesign0209/rdesign02091906/rdesign0209190602590/126200255-coin-icon.jpg'}} />
               </ButtonNextScreen>

               <ButtonNextScreen> 
                   <ImageScreen source={{uri: 'https://previews.123rf.com/images/rdesign0209/rdesign02091906/rdesign0209190602590/126200255-coin-icon.jpg'}} />
               </ButtonNextScreen>
               </View>

            </DivViewNavbar>

        </Container>

    );

}