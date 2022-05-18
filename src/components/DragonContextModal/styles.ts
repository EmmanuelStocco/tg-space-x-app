import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
                                             
export const Container = styled.View`
 align-items: center;
`;

export const ImageRocket = styled.Image`
    width: 300px;
    height: 200px; 
`;

export const Details = styled.View`

`;

export const BlockTwo = styled.View` 
    align-items: center;
    margin-top: 16px;
    padding-horizontal: 12px;

`;

export const BlockOne = styled.View` 
    align-items: center;
    margin-top: 16px;
`;


export const TextTOP = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(12)}px;
    text-transform: uppercase;
`;


export const TextBlock = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_400};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(11)}px;
    text-transform: uppercase;
`;


export const TextPropellant = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_400};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(11)}px;
    text-transform: uppercase;
`;
    