import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TalButton } from '../.';

const App = () => {
  return (
    <div>
      <TalButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
