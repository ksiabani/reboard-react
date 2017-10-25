import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppWrapper from './common/AppWrapper';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const theme = createMuiTheme();

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <AppWrapper/>
            </div>
        </MuiThemeProvider>
    );
};

export default App;
