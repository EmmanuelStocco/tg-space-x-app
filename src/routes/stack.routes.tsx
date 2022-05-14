import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home'
import { CarDetails } from '../screens/CarDetails'
import { Scheduling } from '../screens/Scheduling'
import { SchedullingDetails } from '../screens/SchedullingDetails'
import { SchedulingComplete } from '../screens/SchedulingComplete'
import { MyCars } from '../screens/MyCars';
import { StarlinkView } from '../screens/Starlink';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {

   return (
      <Navigator screenOptions={{ headerShown: false }}>
         <Screen //Home == Rockets
            name='Home'
            component={Home}
         />

         <Screen //StarlinksView
            name='Starlinks'
            component={StarlinkView}
         />

         <Screen
            name='CarDetails'
            component={CarDetails}
         />
         <Screen
            name='Scheduling'
            component={Scheduling}
         />
         <Screen
            name='SchedullingDetails'
            component={SchedullingDetails}
         />
         <Screen
            name='SchedulingComplete'
            component={SchedulingComplete}
         />

         <Screen
            name='MyCars'
            component={MyCars}
         />
      </Navigator>

   );

}