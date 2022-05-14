import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { format } from 'date-fns';
import { StyleSheet, Text, View } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { StatusBar } from 'react-native';
import { Calendar, DayProps, generateInterval, MarkedDatesProps } from '../../components/Calendar';
import { Button } from '../../components/Button';
import { Alert } from 'react-native';

import ArrowSvg from '../../assets/arrow.svg'

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,


} from './styles';
import { NavigationRouteContext, useNavigation, useRoute } from '@react-navigation/native';
import { getPlatformDate } from '../../utils/getPlataformDate';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string
}

interface Params {
    car: CarDTO;
}

export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const theme = useTheme();
    const navigation = useNavigation<any>()
    const route = useRoute();
    const { car } = route.params as Params;

    function handleConfirmRental() {
        // if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
        //     Alert.alert('Selecione o intervalo para alugar')
        // }
        //else {
            navigation.navigate('SchedullingDetails', {
                car,
                dates: Object.keys(markedDates)
            })
       // }
    }

    function handleReturn() {
        navigation.goBack()
    }

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if (start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
        })

    }

    return (

        <Container>
            <Header>
                <StatusBar
                    barStyle='light-content'
                    translucent
                    backgroundColor='transparent'
                />
                <BackButton
                    onPress={handleReturn}
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de inicio e  {'\n'}
                    fim do alugel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle> DE </DateTitle>
                        <DateValue selected={!!rentalPeriod.startFormatted}>
                            {rentalPeriod.startFormatted}
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle> Até </DateTitle>
                        <DateValue selected={!!rentalPeriod.endFormatted}>
                            {rentalPeriod.endFormatted}
                        </DateValue>
                    </DateInfo>

                </RentalPeriod>
            </Header>

            <Content>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button 
                    title='confirmar' 
                    onPress={handleConfirmRental}  
                    enabled={!!rentalPeriod.startFormatted}    
                />
            </Footer>


        </Container>

    );
}