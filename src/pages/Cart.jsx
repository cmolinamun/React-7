import { useCartContext } from '../context/CartContext';

const Cart = () => {
  const { 
    cart, 
    incrementQuantity, 
    decrementQuantity, 
    getTotal,
    formatPrice 
  } = useCartContext();

  return (
    <div className="container mt-4">
      <h5>Detalles del pedido:</h5>
      {cart.map((item, index) => (
        <div key={index} className="d-flex align-items-center justify-content-between mb-2">
          <img 
            src={item.img} 
            alt={item.name} 
            style={{ width: '100px', height: '75px', objectFit: 'cover' }}
            className="me-2"
          />
          <span className="me-2">{item.name}</span>
          <span className="me-2">${formatPrice(item.price)}</span>
          <div>
            <button 
              className="btn btn-sm btn-danger me-1"
              onClick={() => decrementQuantity(index)}
            >
              -
            </button>
            <span className="mx-4">{item.count}</span>
            <button 
              className="btn btn-sm btn-primary"
              onClick={() => incrementQuantity(index)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <h4>Total: ${formatPrice(getTotal())}</h4>
        <button className="btn btn-dark mt-2">Pagar</button>
      </div>
    </div>
  );
};

export default Cart