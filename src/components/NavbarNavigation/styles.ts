import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
                                
export const Container = styled.View`
    background-color: green;                                    
`;


export const ButtonNextScreen = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: white;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 25px;
    border-radius: 8px;
`;


export const ImageScreen = styled(MaterialCommunityIcons)`
      
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    font-size: 32px;
`;


export const DivViewNavbar = styled.View`
    width: 100%;
    height: 60px;
    background-color: #959595;
`;