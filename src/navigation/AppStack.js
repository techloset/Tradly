import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard/Dashboard';
import ProductDetail from '../screens/product/ProductDetail';
import Bread from '../screens/product/Bread';
import Vegetables from '../screens/product/Vegetables';
import Fruit from '../screens/product/Fruit';
import Egg from '../screens/product/Egg';
import Frozen from '../screens/product/Frozen';
import HomeCare from '../screens/product/HomeCare';
import Pet from '../screens/product/Pet';
import CreateStore from '../screens/store/CreateStore';
import EditStore from '../screens/store/EditStore';
import AddProduct from '../screens/store/AddProduct';
import AddStore from '../screens/store/AddStore';
import MyCart from '../screens/cart/MyCart';
import Checkout from '../screens/cart/Checkout';
import AddPayment from '../screens/payment/AddPayment';
import Payment from '../screens/payment/Payment';
import AddCard from '../screens/payment/AddCard';
import OrderDetail from '../screens/payment/OrderDetail';
import MyCart2 from '../screens/cart/MyCart2';
import ProDetail from '../screens/product/ProDetail';
import Wishlist from '../screens/wishlist/Wishlist';
import StoreProfile from '../screens/store/StoreProfile';
import EditProduct from '../screens/store/EditProduct';
import Fruit1 from '../screens/product/Fruit1';
import OnBoard1 from '../screens/onboarding/OnBoard1';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Bread" component={Bread} />
      <Stack.Screen name="Vegetables" component={Vegetables} />
      <Stack.Screen name="Fruit" component={Fruit} />
      <Stack.Screen name="Egg" component={Egg} />
      <Stack.Screen name="Frozen" component={Frozen} />
      <Stack.Screen name="HomeCare" component={HomeCare} />
      <Stack.Screen name="Pet" component={Pet} />
      <Stack.Screen name="CreateStore" component={CreateStore} />
      <Stack.Screen name="EditStore" component={EditStore} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="AddStore" component={AddStore} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="AddPayment" component={AddPayment} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen name="MyCart2" component={MyCart2} />
      <Stack.Screen name="ProDetail" component={ProDetail} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="StoreProfile" component={StoreProfile} />
      <Stack.Screen name="EditProduct" component={EditProduct} />
      <Stack.Screen name="Fruit1" component={Fruit1} />
    </Stack.Navigator>
  );
}
export default AppStack;
