import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, Text, TouchableOpacity, Image, Modal, View, BackHandler } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg' 
import { NavbarNavigation } from '../../components/NavbarNavigation';
import RocketP from '../../assets/RocketP.png'

import { CarDTO } from '../../dtos/CarDTO';  
import { Load } from '../../components/Load';
import Space from '../../assets/Space.svg'
import { getDragonsService } from '../../services/Dragons';
import { Dragon } from '../../components/Dragon';
import { DragonTypes } from '../../components/Dragon/types';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent, 
    MyCarsButtom, 
} from './styles';


export function DragonsView() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation<any>()
    const theme = useTheme(); 
    const [starlinksList, setStarlinksList] = useState<DragonTypes[]>();
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleEsqOpen = async () => { 
        setOpenModal(false)
        BackHandler.exitApp()
    };
    
    function handleOpenModal(value :boolean){
         setOpenModal(value);
    }

    useEffect(() => {  
        async function runGetService() {
            try {
                const res = await getDragonsService();
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
                        Total de {starlinksList?.length} Dragons
                    </TotalCars>
                </HeaderContent>
            </Header>
            
            {loading ? <Load /> : 

                <FlatList
                    data={starlinksList}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) =>
                       <Dragon data={item} />
                    }
                    showsVerticalScrollIndicator={false}
                    style={{backgroundColor: '#f2f2f2', padding: 24}}
                /> 
            }
 
            <NavbarNavigation currentRoute={'dragons'}/>

            
            {/* Modal esq */}
            <Modal
                animationType='fade'
                transparent={true}
                visible={openModal}
                onRequestClose={() => setOpenModal(false)}
            >
                <TouchableOpacity onPress={() => setOpenModal(false)} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <View style={{ justifyContent: 'center', backgroundColor: 'white', borderRadius: 4, padding: 12, marginTop: 70, marginLeft: 20, width: 200, position: 'absolute', height: 100, alignItems: 'center' }}>
                        <Text style={{ fontFamily: "Archivo_400Regular",}}> DESEJA SAIR DO APLICATIVO? </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ backgroundColor: 'red', alignItems: 'center', padding: 4, borderRadius: 4, width: 75 }} onPress={() => setOpenModal(false)}  ><Text style={{ fontFamily: "Archivo_400Regular",}}>Cancelar</Text></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'green', alignItems: 'center', padding: 4, borderRadius: 4, marginLeft: 8, width: 75 }} onPress={() => handleEsqOpen()}><Text style={{ fontFamily: "Archivo_400Regular",}}>SIM</Text></TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
            
        </Container>

    ); 
}