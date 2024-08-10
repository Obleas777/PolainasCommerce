import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';

const Colors = {
  light: {
    tint: '#1e1e1e',
  },
  dark: {
    tint: '#ffffff',
  },
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tintColor,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f8f8f8',
          borderTopWidth: 0,
          shadowColor: 'transparent',
          height: 60,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Registro',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Sucursales',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'store' : 'store-outline'} color={color} size={24} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrito',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'cart' : 'cart-outline'} color={color} size={24} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="confirmacion"
        options={{
          title: 'Confirmación',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'check-circle' : 'check-circle-outline'} color={color} size={24} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="ticket"
        options={{
          title: 'Tickets',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'ticket' : 'ticket-outline'} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="pestañaLogs"
        options={{
          title: 'Logs',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'file-document' : 'file-document-outline'} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="tablaSucursales"
        options={{
          title: 'Tabla Sucursales',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'table' : 'table-large'} color={color} size={24} />
          ),
        }}
      />
      
      {/* Nuevo ícono para la tabla de productos */}
      <Tabs.Screen
        name="tablaProductos"
        options={{
          title: 'Tabla Productos',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'table' : 'table-large'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
