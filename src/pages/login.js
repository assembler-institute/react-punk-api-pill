import { useHistory } from 'react-router-dom';

import LoginLayout from '../components/layouts/LoginLayout';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const history = useHistory();

  const handleLoginSuccess = () => {
    history.push('/');
  }

  return (
    <LoginLayout>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </LoginLayout>
  )
}

export default Login;