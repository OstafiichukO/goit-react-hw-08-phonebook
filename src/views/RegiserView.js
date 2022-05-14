import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInput,
  StyledButton,
  Wrapper,
} from './View.styled';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <h1>Register page</h1>

      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <StyledLabel>
          <StyledSpan>Name</StyledSpan>
          <StyledInput
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
          />
        </StyledLabel>

        <StyledLabel>
          <StyledSpan>Email</StyledSpan>
          <StyledInput
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </StyledLabel>

        <StyledLabel>
          <StyledSpan>Password</StyledSpan>
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </StyledLabel>

        <StyledButton type="submit">Ragistration</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};

export default RegisterView;
