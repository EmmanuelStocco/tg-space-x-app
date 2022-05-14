import React from 'react';
                          
import { FlatList, StyleSheet, Text, View, ViewToken,  } from 'react-native';
import { useRef } from 'react';
                          
import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarImageWrapper,
    CarImage,
} from './styles';
import { useState } from 'react';

interface Props {
    imagesUrl: string[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}
                          
export function ImageSlider({imagesUrl} :Props){
    const [imagemIndex, setImagemIndex] = useState(0)

    const indexChanged = useRef((info: ChangeImageProps)=>{
        const index = info.viewableItems[0].index!;
        setImagemIndex(index);
    }) 
                          
   return (
     <Container>
           <ImageIndexes>
                {
                    imagesUrl.map((item, index) => (
                        <ImageIndex
                            key={String(index)}
                             active={index === imagemIndex} />  
                    ))
                }  
            </ImageIndexes>

          
                <FlatList
                    data={imagesUrl}
                    keyExtractor={key => key}
                    renderItem={({ item }) => (
                        <CarImageWrapper>
                            <CarImage
                            source={{uri: item }}
                            resizeMode='contain'
                            />
                        </CarImageWrapper>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false} 
                    onViewableItemsChanged={indexChanged.current}
                />

              
           

        </Container>  
      );
    }