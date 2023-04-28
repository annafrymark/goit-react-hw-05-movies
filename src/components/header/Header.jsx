import { Link } from 'react-router-dom';
//import { Link, useNavigate } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  // const navigate = useNavigate();

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link to="/">Homepage</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </header>
  );
};
export default Header;
