import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';
import { ButtonEl, Wrapper, ImgEl, SpanEl } from './UserMenu.styled';
// const styles = {
//   wrapper: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 12,
//     color: 'white',
//     textTransform: 'capitalize',
//   },
//   avatar: {
//     marginRight: 4,
//   },
// };

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;
  return (
    <Wrapper>
      <ImgEl src={avatar} alt="" width="32" />
      <SpanEl>Welcome, {name}</SpanEl>
      <ButtonEl onClick={() => dispatch(logOut())}>Logout</ButtonEl>
    </Wrapper>
  );
};
