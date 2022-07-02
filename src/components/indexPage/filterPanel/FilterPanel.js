import React from 'react';
import './filterPanelStyle.scss'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

const FilterPanel = () => {

    const [sortBy, setSortBy] = React.useState("");
    const [language, setLanguage] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [examName, setExamName] = React.useState("");
    const [author, setAuthor] = React.useState("");

    const sortByChange = (e) => {
        alert(e.target.value)
    }

    return (
        <div className="filter_panel_container">
            <TextField id="standard-basic" label="Category" variant="standard"/>
            <TextField id="standard-basic" label="Exam name" variant="standard"/>
            <TextField id="standard-basic" label="Author" variant="standard"/>

            <FormControl>
                <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                <Select
                    labelId="filter_panel_sort_by_label"
                    id="filter_panel_sort_by"
                    variant="standard"
                    value={sortBy}
                    onChange={sortByChange}
                >
                    <MenuItem value={1}>Rating</MenuItem>
                    <MenuItem value={2}>Most views</MenuItem>
                    <MenuItem value={3}>Create date</MenuItem>
                    <MenuItem value={4}>Categories</MenuItem>
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="filter_panel_sort_by_label"
                    id="filter_panel_sort_by"
                    variant="standard"
                    value={sortBy}
                    onChange={sortByChange}
                >
                    <MenuItem value={1}>Rating</MenuItem>
                    <MenuItem value={2}>Most views</MenuItem>
                    <MenuItem value={3}>Create date</MenuItem>
                    <MenuItem value={4}>Categories</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
};

export default FilterPanel;