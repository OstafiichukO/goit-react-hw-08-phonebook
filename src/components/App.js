import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { getCurrentRefresh } from 'redux/auth/auth-selectors';
import Container from './Container';

const AppBar = lazy(() => import('./AppBar'));
const RegisterView = lazy(() => import('views/RegiserView'));
const LoginView = lazy(() => import('views/LoginView'));
const HomePageView = lazy(() => import('views/HomeView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(getCurrentRefresh);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !refresh && (
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <AppBar />
          <Routes>
            <Route index element={<HomePageView />} />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Container>
    )
  );
};
