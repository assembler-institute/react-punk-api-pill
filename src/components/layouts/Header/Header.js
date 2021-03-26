import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearUser } from '../../../redux/user/userActions';
import { setLanguage } from '../../../redux/language/languageActions';

import './Header.scss';

const Header = () => {
  const dispatch = useDispatch(); // Escribimos en redux (hooks)
  const { user, language: lang } =  useSelector(state => state); // Leemos de redux (hooks)

  const handleLogout = () => {
    dispatch(clearUser());
  }

  const handleSetLanguage = (lang) => {
    dispatch(setLanguage(lang))
  }

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/zero-zero">Cervezas Zero-Zero</Link></li>
          <li>
            <button
              disabled={lang === 'es'}
              onClick={() => handleSetLanguage('es')}
            >ES</button>
            <button
              disabled={lang === 'en'}
              onClick={() => handleSetLanguage('en')}
            >EN</button>
          </li>
          {user 
            ? <li>{user.name} {user.lastName} <button onClick={handleLogout}>Logout</button></li>
            : <li><Link to="/login">Login</Link></li>
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
