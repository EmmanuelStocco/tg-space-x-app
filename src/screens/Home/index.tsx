import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, Text, View, Modal, TouchableOpacity, Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Logo from '../../assets/logo.svg'
import { Load } from '../../components/Load'; 
import RocketP from '../../assets/RocketP.png'


import { getRocketsService } from '../../services/Rockets';
import { Rocket } from '../../components/Rocket/Rocket';
import { NavbarNavigation } from '../../components/NavbarNavigation';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
} from './styles';


export function Home() {
    const [loading, setLoading] = useState(true)
    const [rocketsList, setRocketsList] = useState<any[]>();
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    function handleOpenModal(value :boolean){
        setOpenModal(value);
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
                    <TouchableOpacity style={{ width: 30, height:30}} onPress={()=> handleOpenModal(!openModal)}>
                        <Image source={RocketP} style={{  width: 30, height:30}}></Image>
                    </TouchableOpacity> 

                    <TotalCars>
                        Total de {rocketsList?.length} Naves
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

            <NavbarNavigation currentRoute={'rocket'} />  
        </Container> 
    );
}
 