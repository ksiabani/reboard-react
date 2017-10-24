import React from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as frameActions from '../../actions/wrapperActions';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import AppDrawer from './AppDrawer';

class AppWrapper extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            mobileOpen: false
        };
    }

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render() {
        const open = this.state.mobileOpen;
        return (
            <div>
                <AppBar
                    title="Reboard"
                    iconElementLeft={<IconButton onClick={this.handleDrawerToggle}>
                        aria-label="open drawer"
                        <FontIcon className="material-icons">dashboard</FontIcon>
                    </IconButton>}
                    iconElementRight={<IconButton>
                        <FontIcon className="material-icons">settings</FontIcon>
                    </IconButton>}
                />
                <AppDrawer
                    mobileOpen={open}
                    onRequestChange={(open) => {this.setState({mobileOpen: open})}}
                />
            </div>
        );
    }
}

// AppWrapper.propTypes = {
//     mobileOpen: PropTypes.bool.isRequired
// };

// function mapStateToProps(state) {
//     return {
//         mobileOpen: state.drawerStatus // this comes from root reducer
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(frameActions, dispatch)
//     };
// }

export  default AppWrapper;
// export default connect(mapStateToProps)(AppWrapper);
