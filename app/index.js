import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';

import Root from './root';

render(<AppContainer><Root/></AppContainer>, document.getElementById('root'));
// Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('../components/hello', () => { console.log('Accepting the updated printMe module!'); render(Hello) })
// }

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./root', () => {
    const NextApp = require('./root').default;
    render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}