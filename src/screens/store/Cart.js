import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Colors from '../../assets/colors/Colors';

const Cart = () => {
  const [cartCount, setCartCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handlePlusButtonPress = () => {
    if (!inputValue) {
      return;
    }
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setCartCount(prevCount => prevCount + parsedValue);
    }
  };

  const handleMinusButtonPress = () => {
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue) && parsedValue > 0 && cartCount >= parsedValue) {
      setCartCount(prevCount => prevCount - parsedValue);
    } else {
      setCartCount(prevCount => prevCount - parsedValue - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a number"
          value={inputValue}
          onChangeText={setInputValue}
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="#000000"
        />
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.minusButton]}
          onPress={handleMinusButtonPress}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.cartButtonContainer}>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartButtonText}>
              Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.plusButton]}
          onPress={handlePlusButtonPress}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 32,
    backgroundColor: Colors.primary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '90%',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#000000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  button: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  minusButton: {
    backgroundColor: 'red',
    borderRadius: 8,
  },
  plusButton: {
    backgroundColor: 'green',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  cartButtonContainer: {
    flex: 2,
    paddingHorizontal: 8,
  },
  cartButton: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Cart;
