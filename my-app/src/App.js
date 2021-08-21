import { Provider } from "react-redux";
import { Router } from "./components/Router";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Parent } from "./components/Example";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;