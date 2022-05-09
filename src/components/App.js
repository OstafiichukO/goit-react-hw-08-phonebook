import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';
import Container from './Container';

// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
import { authOperations, authSelectors } from '../redux/auth';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const UploadView = lazy(() => import('../views/UploadView'));

// import Section from './Section';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.isFetchingCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <AppBar />
          <Routes>
            <Suspense fallback={<p>Loading...</p>}>
              <Route path="/" component={<HomeView />} />
              <Route path="register" component={<RegisterView />} />
              <Route path="login" component={<LoginView />} />
              <Route path="contacts" component={<ContactsView />} />
              <Route path="upload" component={<UploadView />} />
            </Suspense>
          </Routes>
        </>
      )}
    </Container>
  );
};

export default App;
