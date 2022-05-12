import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    padding: 12,
    fontWeight: 700,
    color: 'white',
  },
  activeLink: {
    color: 'red',
  },
};

export const Navigation = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <nav>
      <NavLink to="/home" style={styles.link}>
        Home-page
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={styles.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
