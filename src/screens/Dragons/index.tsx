import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg' 
import { NavbarNavigation } from '../../components/NavbarNavigation';

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
                    <Space
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

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
        </Container>

    ); 
}