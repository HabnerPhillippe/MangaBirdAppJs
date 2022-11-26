import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Favorites from '../pages/Favorites'
import Login from '../pages/Login';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Screen
                name="Login"
                component={Login}
            />

            <Screen
                name="Favorites"
                component={Favorites}
            />
            
        </Navigator>
    )

}