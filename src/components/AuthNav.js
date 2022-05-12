import { NavLink } from 'react-router-dom';

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
