import React from 'react'; 
import { useWindowDimensions, StatusBar } from 'react-native'

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg'

import { ConfirmButtom } from '../../components/ConfirmButtom';
import { NavigationRouteContext, useNavigation } from '@react-navigation/native';


import {
    Container,
    Content,
    Title,
    Message,
    Footer,
} from './styles';  
                          
export function SchedulingComplete(){
   const { width } = useWindowDimensions();       
   const navigation = useNavigation<any>();

   function handleConfirm(){
    navigation.navigate('Home')
    } 
    
   return ( 
        <Container>
            <StatusBar
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
            />
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80}/>
                <Title> Carro Alugado! </Title>

                <Message>
                    Parabéns! o seu carro foi {'\n'} 
                    alugado com sucesso. Desejamos {'\n'}
                    que você aproveite o melhor! 
                </Message>
            </Content>

            <Footer>
                <ConfirmButtom title='Ok'onPress={handleConfirm} />
            </Footer>
                          
        </Container>
  
      ); 
    }