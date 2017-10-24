import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppWrapper from './common/AppWrapper';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => {
    return (
        <MuiThemeProvider>
            <div className="App">
                <AppWrapper/>
            </div>
        </MuiThemeProvider>
    );
};

export default App;
