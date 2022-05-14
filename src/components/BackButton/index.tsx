import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';                          

import { StyleSheet, Text, View } from 'react-native';
                          
import {
    Container,
} from './styles';

interface Props extends BorderlessButtonProps {
    color?: string
}

export function BackButton({color, ...rest } :Props){      
   const theme = useTheme();
   return ( 
           <Container {...rest}>
                <MaterialIcons
                    name="chevron-left"
                    size={24}
                    color={color ? color : theme.colors.text} //se tiver conteudo  na cor usa ele, se não usa do theme
                />
           </Container>
  
      );
     
    }