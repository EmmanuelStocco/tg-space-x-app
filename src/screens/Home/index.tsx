import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Logo from '../../assets/logo.svg'
import { Load } from '../../components/Load';

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
                        Total de Carros
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

            <NavbarNavigation />
        </Container>

    );
}