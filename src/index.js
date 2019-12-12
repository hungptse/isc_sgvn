import React from 'react';
import ReactDOM from 'react-dom';
const rootEL = document.getElementById("root");
/*
color options : 
	 'light.purple'		'dark.purple'
	 'light.blue'		  'dark.blue'
	 'light.green'		'dark.green'
	 'light.orange'		'dark.orange'
	 'light.red'		  'dark.red'
*/
var color = 'light.red';
if (localStorage.getItem('themeColor')) {
  color = localStorage.getItem('themeColor');
}

let render = () => {
  const css = import('./assets/css/sass/themes/gogo.' + color + '.scss').then(x => {
    const MainApp = require('./App').default;

    ReactDOM.render(
      <MainApp />,
      rootEL
    );
  });

};

if (module.hot) {
  module.hot.accept('./App', () => {
    const css = import('./assets/css/sass/themes/gogo.' + color + '.scss').then(x => {
      const NextApp = require('./App').default;

      render(
        <NextApp />,
        rootEl
      );
    });
  });

}

render() 