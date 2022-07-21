import React from 'react';
import './searchPanelStyle1.scss'
import {TextField} from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchPanel = () => {
    return (
        <div className="search_panel_container">
            <TextField id="outlined-basic" label="Search" variant="outlined" size="small"
             InputProps={{
                 endAdornment: <SearchRoundedIcon/>
             }}
            />
        </div>
    );
};

export default SearchPanel;