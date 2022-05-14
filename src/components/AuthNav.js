import { NavLink } from 'react-router-dom';

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

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" style={styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" style={styles.link}>
        Login
      </NavLink>
    </div>
  );
};
