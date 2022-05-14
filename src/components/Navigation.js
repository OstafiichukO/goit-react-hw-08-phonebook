import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth-selectors';

const styles = {
  link: {
    margin: '5px',
    padding: '10px',
    border: 'none',
    width: '100px',
    fontSize: '18px',
    fontWeight: 400,
    fontFamily: 'italic',
    borderRadius: '5px',
    color: 'black',
    backgroundColor: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
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
