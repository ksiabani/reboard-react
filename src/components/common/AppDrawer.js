import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const AppDrawer = ({mobileOpen, onRequestChange}) => {
    return (
        <div>
            <Drawer
                docked={false}
                open={mobileOpen}
                onRequestChange={onRequestChange}>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
        </div>
    );
};

export default AppDrawer;

