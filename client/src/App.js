// components
import Messenger from "./components/Messenger";

import { GoogleOAuthProvider } from "@react-oauth/google";

import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "493529100944-7290gl6mgjvf9mrhck7hjgf2dr9s2nkl.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger></Messenger>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
