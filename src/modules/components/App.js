import React from 'react';
import {Route, Link} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';
import blueGrey from 'material-ui/colors/blueGrey';
import AppWrapper from './common/AppWrapper';
import Home from '../../pages/home/Home';
import Issues from '../../pages/issues/Issues';
import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const theme = createMuiTheme({
    palette: {
        primary: blueGrey
    },
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

