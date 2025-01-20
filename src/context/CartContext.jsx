import { createContext, useState, useContext, useEffect } from 'react';
import { pizzaCart } from '../pizzas.js';
import { getAllPizzas } from '../services/pizzaService';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart);
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPizzas = async () => {
      try {
        const data = await getAllPizzas();
        setPizzas(data);
      } catch (err) {
        setError('Error al cargar las pizzas');
      } finally {
        setLoading(false);
      }
    };

    loadPizzas();
  }, []);

  const incrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].count += 1;
    setCart(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].count > 1) {
      newCart[index].count -= 1;
      setCart(newCart);
    } else {
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.count), 0);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      pizzas,
      loading,
      error,
      incrementQuantity,
      decrementQuantity,
      getTotal,
      formatPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);