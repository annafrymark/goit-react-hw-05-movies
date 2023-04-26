import { Link, useNavigate } from "react-router-dom";
import css from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();

    return (
      <header>
        <nav className={css.nav}>
          <Link to="/">Homepage</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <nav className={css.navButton}>
                <button type="button" onClick={() => navigate(-1)}>Go back</button>
        </nav>
      </header>
    );
}
export default Header;