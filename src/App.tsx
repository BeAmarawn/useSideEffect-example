import { Provider as StoreProvider } from 'react-redux';
import { store } from './state/store';

import Home from './pages/Home';

function App() {
  return (
    <StoreProvider store={store}>
      <Home />
    </StoreProvider>
  );
}

export default App;
