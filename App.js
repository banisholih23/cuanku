import React, { Fragment, Component } from 'react';
import Drawer from './src/component/drawer'
import Navigation from './src/component/navigation'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store';

class App extends Component {
  render() {
    return (
      <>
        <Fragment>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Navigation />
            </PersistGate>
          </Provider>
        </Fragment>
      </>
    );
  }
}

export default App;