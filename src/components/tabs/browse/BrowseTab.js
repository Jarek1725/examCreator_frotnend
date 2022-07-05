import React from 'react';
import './browseTabStyle.scss';
import SortByPanel from "../../common/sortByPanel/SortByPanel";
import {Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MainGridElement from "../../mainGridElement/MainGridElement";

const BrowseTab = () => {

    let sortByData = () => {
        return (
            [

                (
                    <FormControl style={{
                        width: 120,
                        marginRight: 50
                    }}>
                        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            variant="standard"

                        >
                            <MenuItem value={10}>Rating</MenuItem>
                            <MenuItem value={20}>Last update</MenuItem>
                            <MenuItem value={30}>Most attempts</MenuItem>
                        </Select>
                    </FormControl>
                ),

                (
                    <TextField id="outlined-basic" label="School" variant="standard" size="small" style={{
                        width: 160,
                        marginRight: 50
                    }}/>
                ),
                (
                    <TextField id="outlined-basic" label="Category" variant="standard" size="small" style={{
                        width: 160,
                        marginRight: 50
                    }}/>
                )
            ]

        );
    }

    const gridData = [
        {
            id:"#32FZ6H",
            title:"Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories:"Programowanie, Sesja 2021",
            lastUpdateDate:"03.07.2022",
            averageScore:{
                value:75,
                icon:"TEST"
            },
            rating:3.0,
            activeQuestions:23,
            attempts:67
        },
        {
            id:"#CR54A1",
            title:"Bazy danych 06.2021",
            categories:"Bazy danych, Sesja 2021",
            lastUpdateDate:"14.06.2021",
            // averageScore:63,
            // rating:4.5,
            // activeQuestions:17,
            // attempts:18
        },
        {
            id:"#AV391K",
            title:"Baza pytań PK WIEIK Architektura Systemów",
            categories:"ASK, Sesja 2021",
            lastUpdateDate:"17.06.2021",
            // averageScore:63,
            // rating:4.5,
            // activeQuestions:17,
            // attempts:18
        },
        {
            id:"#AV391K",
            title:"Prawdopodobne pytania fizyka",
            categories:"Fizyka, kolokwium zaliczeniowe",
            lastUpdateDate:"17.01.2022",
            // averageScore:63,
            // rating:4.5,
            // activeQuestions:17,
            // attempts:18
        },
        {
            id:"#AV391K",
            title:"Analiza matematyczna",
            categories:"Matematyka, sesja 2022",
            lastUpdateDate:"13.02.2022",
            // averageScore:63,
            // rating:4.5,
            // activeQuestions:17,
            // attempts:18
        }
    ]

    return (
        <div className="browse_tab_container">
            <SortByPanel data={sortByData()}/>
            {gridData.map(data=>(
                <MainGridElement data={data} widths={"1fr 5fr 2fr 2fr"} isFirstId={true} idName={"id"} elementToShow={4}/>
            ))}
        </div>
    );
};

export default BrowseTab;