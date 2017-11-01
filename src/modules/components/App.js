import React from 'react';
import {Route, Link} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import AppWrapper from './common/AppWrapper';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from '../../pages/home/Home';
import Issues from '../../pages/issues/Issues';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Open Sans", sans-serif'
        // font-family: 'Open Sans', sans-serif !important;
    }
});

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <AppWrapper>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/issues" component={Issues}/>
                </AppWrapper>
            </div>
        </MuiThemeProvider>
    );
};

export default App;

