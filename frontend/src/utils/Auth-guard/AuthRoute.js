import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const [state] = useContext(UserContext);

  useEffect(() => {
    if (!state) {
      navigate('login', { replace: true });
    }
  }, [state, navigate]);
  return children;
};

export default AuthRoute;
