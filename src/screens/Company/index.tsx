import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg'
import { NavbarNavigation } from '../../components/NavbarNavigation';

import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
import Space from '../../assets/Space.svg'
import { getCompanyService } from '../../services/Comapany';
import { CompanyCarton } from '../../components/CompanyCarton';
import { Linking } from 'react-native';
import {useRoute} from '@react-navigation/native';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    MyCarsButtom,
    TextJob,
    Description,
    ImageCreator,
    ButtonRedirectetSocialMidia,
    TitleSocialMidia
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';


export function CompanyView() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation<any>()
    const theme = useTheme();
    const [companyData, setCompanyData] = useState<any[]>();
    const route = useRoute();

    async function redirectSocialMidia(link :string){
        Linking.openURL(link)
    }

    useEffect(() => {
        async function runGetService() {
            try {
                const res = await getCompanyService();
                setCompanyData(res.data)
            } catch (error) {
                console.log('my error');
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        runGetService();
    }, []);


    useEffect(()=>{
        console.log(route); 
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
                    />
 
                </HeaderContent>
            </Header>

            {loading ? <Load /> :

                <ScrollView style={{ backgroundColor: '#636161' }}>
                    <View style={{ alignItems: 'center' }}>
                        <TextJob> Empresa </TextJob>
                        <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci delectus quisquam quaerat aliquam. Excepturi facere quae deserunt dicta ullam. Quos molestias odio quae, consequuntur expedita fugit dolor quod ipsum dolorem.s</Description>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TextJob> Criador </TextJob>
                        <ImageCreator source={{ uri: 'data:image/jpeg;base64,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'}} />
                    </View>

                    <View style={{ alignItems: 'center' }}>

                        <ButtonRedirectetSocialMidia onPress={()=> redirectSocialMidia(companyData?.links.website)}>
                            <TitleSocialMidia> Website</TitleSocialMidia>
                        </ButtonRedirectetSocialMidia>

                        <ButtonRedirectetSocialMidia onPress={()=> redirectSocialMidia(companyData?.links.flickr)}>
                            <TitleSocialMidia> Flickr</TitleSocialMidia>
                        </ButtonRedirectetSocialMidia>

                        <ButtonRedirectetSocialMidia onPress={()=> redirectSocialMidia(companyData?.links.twitter)}>
                            <TitleSocialMidia> Twitter </TitleSocialMidia>
                        </ButtonRedirectetSocialMidia>
  
                        <ButtonRedirectetSocialMidia onPress={()=> redirectSocialMidia(companyData?.links.elon_twitter)}>
                            <TitleSocialMidia> Twitter do Criador </TitleSocialMidia>
                        </ButtonRedirectetSocialMidia>
                    </View>
                </ScrollView>
            }

            <NavbarNavigation currentRoute={'company'}  />
        </Container>

    );
}