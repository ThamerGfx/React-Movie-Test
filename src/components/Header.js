import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function PrimarySearchAppBar() {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Select Movies App <b style={{color: '#060f19'}}><h6>Thamer Gouider</h6></b>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
