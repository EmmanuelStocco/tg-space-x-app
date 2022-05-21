import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, Text, TouchableOpacity, Image, BackHandler, Modal, View, ScrollView, SafeAreaView } from 'react-native'
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
    Description,
    HeaderDescription,
    DescriptionText,
    TitleDesc
} from './styles';


export function StarlinkView() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation<any>()
    const theme = useTheme();
    const [openModal, setOpenModal] = useState<boolean>(false);

    const [starlinksList, setStarlinksList] = useState<any[]>();

    const handleEsqOpen = async () => {
        setOpenModal(false)
        BackHandler.exitApp()
    };

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars() {
        navigation.navigate('MyCars')
    }
    function handleOpenModal(value: boolean) {
        setOpenModal(value);
    }

    useEffect(() => {

        async function runGetService() {
            try {
                const res = await getStarlinksService();
                setStarlinksList(res.data)
                setLoading(false)
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
                    <TouchableOpacity style={{ width: 30, height: 30 }} onPress={() => handleOpenModal(!openModal)}>
                        <Image source={RocketP} style={{ width: 30, height: 30 }}></Image>
                    </TouchableOpacity>

                    <TotalCars>
                        Total de {starlinksList?.length} Starlinks
                    </TotalCars>
                </HeaderContent>
            </Header>



            {loading ? <Load /> :

                <SafeAreaView> 
                            
                    <FlatList
                        data={starlinksList}
                        ListHeaderComponent={() => (
                            <Description>
                                <HeaderDescription>
                                    <Text style={{ color: '#FFFFFF', fontFamily: 'Archivo_600SemiBold', fontSize: 25 }}> O projeto starlink </Text>
                                    <Text style={{ color: '#FFFFFF', fontFamily: 'Archivo_400Regular', fontSize: 15, marginTop: 20 }}> Idealizado em 2015, o objetivo é oferecer acesso à internet com velocidade de conexão e cobertura global por meio de satélites. A meta é disponibilizar serviços de internet especialmente em regiões mais afastadas, que, atualmente, têm dificuldade para se conectar. </Text>

                                    {/*<DescriptionText> o projeto starlink </DescriptionText> */}
                                </HeaderDescription>
                            </Description>
                        )}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) =>
                            <Starlink data={item} />
                        }
                        showsVerticalScrollIndicator={false}
                        style={{ backgroundColor: '#f2f2f2', padding: 24 }}
                    >

                    </FlatList>
                </SafeAreaView >
            }


            <NavbarNavigation currentRoute={'sattelite'} />

            {/* Modal esq */}
            <Modal
                animationType='fade'
                transparent={true}
                visible={openModal}
                onRequestClose={() => setOpenModal(false)}
            >
                <TouchableOpacity onPress={() => setOpenModal(false)} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <View style={{ justifyContent: 'center', backgroundColor: 'white', borderRadius: 4, padding: 12, marginTop: 70, marginLeft: 20, width: 200, position: 'absolute', height: 100, alignItems: 'center' }}>
                        <Text style={{ fontFamily: "Archivo_400Regular", }}> DESEJA SAIR DO APLICATIVO? </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ backgroundColor: 'red', alignItems: 'center', padding: 4, borderRadius: 4, width: 75 }} onPress={() => setOpenModal(false)}  ><Text style={{ fontFamily: "Archivo_400Regular", }}>Cancelar</Text></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'green', alignItems: 'center', padding: 4, borderRadius: 4, marginLeft: 8, width: 75 }} onPress={() => handleEsqOpen()}><Text style={{ fontFamily: "Archivo_400Regular", }}>SIM</Text></TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </Container>

    );

}