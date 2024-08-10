import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // O usa otra librería de íconos que prefieras
import { FontAwesome } from '@expo/vector-icons'; // Para el ícono del carrito de compras

const { width } = Dimensions.get('window'); // ancho de la pantalla

interface CartItemType {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItem: React.FC<{
  item: CartItemType;
  onAdd: () => void;
  onRemove: () => void;
  onDelete: () => void;
}> = ({ item, onAdd, onRemove, onDelete }) => (
  <View style={styles.cartItem}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <View style={styles.itemDetails}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </View>
    <View style={styles.actionsContainer}>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={onAdd} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={onRemove} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Ionicons name="trash-outline" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  </View>
);

const Cart: React.FC = () => {
  // Datos de ejemplo, reemplaza con tus datos reales
  const cartItems: CartItemType[] = [
    { id: 1, name: 'Picafresas', price: 10.00, image: 'https://loveveg.mx/app/uploads/2021/11/Mesa-de-trabajo-58-711x1024.jpg', quantity: 1 },
    { id: 2, name: 'Aciduladito', price: 20.00, image: 'https://http2.mlstatic.com/D_NQ_NP_787132-MLU73865457966_012024-O.webp', quantity: 2 },
  ];

  const handleAdd = (id: number) => {
    console.log(`Agregar más del producto ${id}`);
  };

  const handleRemove = (id: number) => {
    console.log(`Reducir la cantidad del producto ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Eliminar producto ${id} del carrito`);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0); // Total de artículos en el carrito

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.headerTitle}>Carrito de Compras</Text>
        <View style={styles.cartContainer}>
          <FontAwesome name="shopping-cart" size={24} color="#FFF" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{totalItems}</Text>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.cartContainerStyle}>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onAdd={() => handleAdd(item.id)}
            onRemove={() => handleRemove(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceder con el Pago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#232F3E',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1D1D1D',
    marginTop: 30, // Ajusta este valor para bajar la navbar
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    flex: 1,
    textAlign: 'left',
  },
  cartContainer: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cartContainerStyle: {
    padding: 15,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    elevation: 1,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#333',
  },
  quantityText: {
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    marginLeft: 15,
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 5,
  },
  footer: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#232F3E',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});


export default Cart;
