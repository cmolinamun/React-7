import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Navbar = () => {
  const { getTotal, formatPrice } = useCartContext();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="navbar-brand mb-0">
            🍕 Pizzería Mamma Mia!
          </Link>
          <Link to="/" className="btn btn-outline-light">
            🏠 Home
          </Link>
          <Link to="/login" className="btn btn-outline-light">
            👤 Login
          </Link>
          <Link to="/register" className="btn btn-outline-light">
            📝 Register
          </Link>
        </div>
        <Link to="/cart" className="border border-light rounded px-3 py-2 text-light text-decoration-none">
          🛒 Total: ${formatPrice(getTotal())}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 