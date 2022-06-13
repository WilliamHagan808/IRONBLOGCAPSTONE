import React from 'react'
import {AppBar, Toolbar, Typography, Box, Button, Tab, Tabs} from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState();
    return <AppBar
    position="sticky"
     sx={{ background:
      "linear-gradient(90deg, rgba(68,67,69,1) 0%, rgba(133,126,126,1) 50%, rgba(97,123,180,1) 100%)" }}>
        <Toolbar>
            <Typography variant="h4">TheIronBlog</Typography>
            <Box display="flex" marginLeft={'auto'} marginRight="auto">
                <Tabs textColor="inherit" value={value} onChange={(_e,val)=>setValue(val)}>
                    <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
                    <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
                </Tabs>
            </Box>
           <Box display="flex" marginLeft="auto">
           <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color="warning">Login</Button>
           <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color="warning">Sign Up</Button>
           <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color="warning">Logout</Button>

           </Box>
        </Toolbar>
    </AppBar>;
     
    
};

export default Header