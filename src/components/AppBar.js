import { Outlet } from 'react-router-dom';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/auth-selectors';
// import axios from 'axios';

const styles = {
  header: {
    backgroundColor: '#4267B2',
    padding: 20,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 85,
  },
};

const AppBar = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  // console.log('Залогінився? >', isLoggedIn);
  // console.log(axios.defaults);
  return (
    <div>
      <header style={styles.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Outlet />
    </div>
  );
};

export default AppBar;
