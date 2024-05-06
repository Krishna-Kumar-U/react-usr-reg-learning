import {
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from "react-redux";
import { store, persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./Hooks/router";

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
