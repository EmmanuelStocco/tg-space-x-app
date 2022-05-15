import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home' 
import { StarlinkView } from '../screens/Starlink';
import { CrewsViews } from '../screens/Crews';
import { CompanyView } from '../screens/Company';
import { DragonsView } from '../screens/Dragons';

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

         <Screen //Dragons
            name='Dragons'
            component={DragonsView}
         />

         <Screen //Crew
            name='Crews'
            component={CrewsViews}
         />

         <Screen //Company
            name='Company'
            component={CompanyView}
         />

      </Navigator>

   );

}