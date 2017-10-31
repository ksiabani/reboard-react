import React from 'react';
import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
import Menu, { MenuItem } from 'material-ui/Menu';
import {withStyles} from 'material-ui/styles';

// const styleSheet = ({
//     root: {
//         height: 'calc(100% - 64px)',
//         top: 64
//     }
// });

const AppDrawer = ({mobileOpen, onRequestChange}) => {
    return (
        <div>
            {/*<Drawer*/}
                {/*docked={true}*/}
                {/*containerStyle={{boxShadow: 'unset'}}*/}
                {/*open={mobileOpen}*/}
                {/*onRequestChange={onRequestChange}>*/}
                {/*<MenuItem>Menu Item</MenuItem>*/}
                {/*<MenuItem>Menu Item 2</MenuItem>*/}
            {/*</Drawer>*/}
        </div>
    );
};

export default AppDrawer;
// export default withStyles(styleSheet)(AppDrawer);

