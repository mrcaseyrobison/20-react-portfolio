import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box;'

import { styled } from '@mui/material/styles';

// In-line style
const styles = {
    navigation: {
        marginTop: 0
    }
};

// Custom Styling
const StyledTab = styled(Tab)({
    '&.MuiTouchRipple-root': {
        color: "#D3D3D3"
    },
    "&.MuiButtonBase-root.MuiTab-root": {
        fontSize: "15px",
        fontWeight: 700,
        paddingLeft: 0,
        paddingRight: 0
      },
      "&.Mui-selected": {
        color: "#D3D3D3",
        fontSize: "15px"
      },
})