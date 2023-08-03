/* eslint-disable */
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch } from "react-router-dom";
import { AppCard } from './pages/AppCard';

function App({ store, persistor }) {
  /**
   * TODO: put a persisantStore to handle loaidng a splash screen or waiting
   * for auth authentication
   */
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <Switch>
          <AppCard />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
