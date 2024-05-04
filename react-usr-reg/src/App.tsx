
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

import SignIn from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import PageNotFound from "./Pages/PageNotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Provider } from "react-redux";
import { store, persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
    errorElement: <PageNotFound />
  },
  {
    path: '/login',
    element: <SignIn />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]);

const defaultTheme = createTheme();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" >
            <CssBaseline />
            <RouterProvider router={router} />
          </Container>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
