import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Acessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,

} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import { useTheme } from 'styled-components';
import { NavigationRouteContext, useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccesoryIcon'
import { useEffect } from 'react';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlataformDate';
import api from '../../services/api';
import { Alert } from 'react-native';

interface Params {
    car: CarDTO;
    dates: string[]
}

interface RentalPeriod {
    start: string;
    end: string;
}


export function SchedullingDetails() {
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const navigation = useNavigation<any>()
    const route = useRoute();
    const { car, dates } = route.params as Params;

    const rentTotal = Number(dates.length * car.rent.price);

    async function handleConfirmRental() {

        //enviando dados para api
        const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

        const unavailable_dates = [
            ...schedulesByCar.data.unavailable_dates,
            ...dates,
        ];

        setLoading(true)

        await api.post('schedules_byuser', {
            user_id: 1,
            car,
            startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyy')
        })

        //dando put com promise no lugar do await 
        api.put(`/schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates
        })
            .then(() => navigation.navigate('SchedulingComplete'))
            .catch(() => {
                setLoading(false);
                Alert.alert('Não foi possivel finalizar o angendamento' )
            })
    }

    function handleReturn() {
        navigation.goBack()
    }

    useEffect(() => {
        setRentalPeriod({
            start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyy')
        })
    }, [])

    return (
        <Container>
            <Header>
                <BackButton onPress={handleReturn} />
            </Header>

            <CarImages>
                <ImageSlider imagesUrl={car.photos} />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R${car.rent.price}</Price>
                    </Rent>
                </Details>

                <Acessories>
                    {
                        car.accessories.map(accesory => (
                            <Acessory
                                key={accesory.type}
                                name={accesory.name}
                                icon={getAccessoryIcon(accesory.type)} />
                        ))
                    }
                </Acessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name='calendar'
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle> DE </DateTitle>
                        <DateValue> {rentalPeriod.start} </DateValue>
                    </DateInfo>

                    <Feather
                        name='chevron-right'
                        size={RFValue(24)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle> Até </DateTitle>
                        <DateValue> {rentalPeriod.end} </DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel> TOTAL </RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota> {`R$ ${car.rent.price} x ${dates.length} diárias`} </RentalPriceQuota>
                        <RentalPriceTotal> R$ {rentTotal} </RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>

            <Footer>
                <Button
                    title='Alugar agora'
                    color={theme.colors.success}
                    onPress={handleConfirmRental}
                    enabled={!loading}
                    loading={loading}
                />
            </Footer>

        </Container>

    );
}