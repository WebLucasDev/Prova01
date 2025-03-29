import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlatListScreen from './scroll/FlatListScreen';
import SectionListScreen from './scroll/SectionListScreen';
import FormScreen from './scroll/FormSreen';

const Tab = createBottomTabNavigator();

const ScrollTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Lista" component={FlatListScreen} />
    <Tab.Screen name="Seção" component={SectionListScreen} />
    <Tab.Screen name="Formulário" component={FormScreen} />
  </Tab.Navigator>
);

export default ScrollTabs;
