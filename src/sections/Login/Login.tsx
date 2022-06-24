import React, { useState } from 'react';
import { TbBrandGoogle, TbBrandMeta } from 'react-icons/tb';
import { Divider, TextField } from '../../components';
import { Btn, Container, Others } from './styles';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <TextField
        id="username"
        label="Username"
        value={username}
        onChange={setUsername}
      />

      <TextField
        id="password"
        label="Password"
        value={password}
        onChange={setPassword}
      />

      <Divider />

      <Others>
        <span>Log in with</span>

        <Btn type="button">
          <TbBrandGoogle />
        </Btn>

        <Btn type="button">
          <TbBrandMeta />
        </Btn>
      </Others>
    </Container>
  );
};

export default Login;
