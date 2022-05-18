import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
                                             
export const Container = styled.View`
    width: 100%;
    height:auto;
    background-color: ${({ theme }) => theme.colors.background_secondary};

     
    justify-content: space-between;
    align-items: center;

    padding: 24px;
    margin-bottom: 16px;
 
 
`;
  
export const Details = styled.View`

`;

export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
`;  

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
`;

export const About = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
`;

export const Rent = styled.View`
    margin-right: 24px;
`;

export const Diameter = styled.Text`
     font-family: ${({ theme }) => theme.fonts.secondary_500};
     color: ${({ theme }) => theme.colors.text_detail};
     font-size: ${RFValue(10)}px;

     text-transform: uppercase;
`;

export const ViewDiameter = styled.View`
    flex-direction: row;
`;
export const TitleDiameter = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;
    

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
     color: ${({ theme }) => theme.colors.main};
     font-size: ${RFValue(15)}px;
`;

export const Type = styled.View`

`;

export const RocketImage = styled.Image`
    width: 150px;
    height: 200px; 
`;


export const ButtonRedirectWikipedia = styled.TouchableOpacity`
    margin-top: 5px;
    width: 100px;
    height: 30px;
    background-color: #2e2c2c;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;


export const TextButton = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_400};
    color:  #FFFFFF;
`;