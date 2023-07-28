import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const domain: string = process.env.REACT_APP_AUTH0_DOMAIN!;
const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID!;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: "https://bc88-fe.fe-assignment.tk/dashboard",
      }}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
