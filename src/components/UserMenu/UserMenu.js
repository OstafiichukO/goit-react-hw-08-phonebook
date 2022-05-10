import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';
const styles = {
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: 'black',
  },
  avatar: {
    marginRight: 4,
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;
  return (
    <div>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};
