import React, { useState } from "react";
import { AppBar, Typography, Button, Toolbar, Tabs, Tab } from "@mui/material";

const Navigation = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            {/* using AppBar................................... */}
            {/* <AppBar>
                <Toolbar>
                    <Typography variant='h4'>LOGO</Typography>
                    <Button variant='contained' color='success' sx={{ marginLeft: 'auto' }}>SingIn</Button>
                </Toolbar>
            </AppBar> */}

            {/* using Tabs and tab.............................. */}
            <AppBar>
                <Toolbar>
                    <Typography variant='h4'>LOGO</Typography>
                    <Tabs
                        sx={{ marginLeft: "auto" }}
                        textColor='inherit'
                        indicatorColor='secondary'
                        value={value}
                        onChange={(e, val) => setValue(val)}
                    >
                        <Tab label='Home' />
                        <Tab label='About' />
                        <Tab label='Contact' />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;
