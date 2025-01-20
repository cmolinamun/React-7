import { useCartContext } from '../context/CartContext';

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { cart, setCart, formatPrice } = useCartContext();

  const addToCart = () => {
    const newCart = [...cart];
    const existingPizzaIndex = newCart.findIndex(item => item.id === id);

    if (existingPizzaIndex !== -1) {
      newCart[existingPizzaIndex].count += 1;
    } else {
      newCart.push({
        id,
        name,
        price,
        img,
        count: 1
      });
    }
    setCart(newCart);
  };

  return (
    <div className="card border-1">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body px-0">
        <h3 className="card-title text-center fw-bold">{name}</h3>
        <hr />
        <div className="text-center">
          <p className="text-secondary mb-2">Ingredientes:</p>
          <p className="mb-4">
            🍕 {ingredients.join(', ')}
          </p>
        </div>
        <hr />
        <h4 className="text-center mb-4">Precio: ${formatPrice(price)}</h4>
        <div className="d-flex justify-content-center gap-5">
          <button className="btn btn-outline-dark px-5">
            Ver Más <span className="ms-1">↗️</span>
          </button>
          <button 
            className="btn btn-dark px-5"
            onClick={addToCart}
          >
            Añadir <span className="ms-1">🛒</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza; 