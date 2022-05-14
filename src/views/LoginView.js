import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInput,
  StyledButton,
  Wrapper,
} from './View.styled';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <h1>Login page</h1>

      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <StyledLabel>
          <StyledSpan>Email</StyledSpan>
          <StyledInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </StyledLabel>

        <StyledLabel>
          <StyledSpan>Password</StyledSpan>
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </StyledLabel>

        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};

export default LoginView;
