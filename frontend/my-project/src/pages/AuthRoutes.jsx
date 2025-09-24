import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthRoutes({ children }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } 
  }, [user, navigate]);

 
  return children;
}

export default AuthRoutes;
