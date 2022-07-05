import React from 'react';
import './browseTabStyle.scss';
import SortByPanel from "../../common/sortByPanel/SortByPanel";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
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
                        marginRight: 50,
                        color: "red",
                        borderColor: "red"
                    }}
                               sx={{input: {color: '#707070'}}}
                    />
                ),
                (
                    <TextField id="outlined-basic" label="Category" variant="standard" size="small" style={{
                        width: 160,
                        marginRight: 50
                    }}
                               sx={{input: {color: '#707070'}}}
                    />
                )
            ]

        );
    }

    const gridData = [
        {
            id: "#32FZ6H",
            title: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: {
                value: 75,
                ownType: "average"
            },
            rating: {
                value: 4,
                ownType: "rating"
            },
            activeQuestions: {
                value: 23,
                ownType: "activeQuestions"
            },
            attempts: {
                value: 23,
                ownType: "attempts"
            },
        },
        {
            id: "#CR54A1",
            title: "Bazy danych 06.2021",
            categories: "Bazy danych, Sesja 2021",
            lastUpdateDate: "14.06.2021",
            averageScore: {
                value: 32,
                ownType: "average"
            },
            rating: {
                value: 2.5,
                ownType: "rating"
            },
            activeQuestions: {
                value: 12,
                ownType: "activeQuestions"
            },
            attempts: {
                value: 44,
                ownType: "attempts"
            },
        },
        {
            id: "#AV391K",
            title: "Baza pytań PK WIEIK Architektura Systemów",
            categories: "ASK, Sesja 2021",
            lastUpdateDate: "17.06.2021",
            averageScore: {
                value: 98,
                ownType: "average"
            },
            rating: {
                value: 5,
                ownType: "rating"
            },
            activeQuestions: {
                value: 22,
                ownType: "activeQuestions"
            },
            attempts: {
                value: 76,
                ownType: "attempts"
            },
        },
        {
            id: "#AV391K",
            title: "Prawdopodobne pytania fizyka",
            categories: "Fizyka, kolokwium zaliczeniowe",
            lastUpdateDate: "17.01.2022",
            averageScore: {
                value: 54,
                ownType: "average"
            },
            rating: {
                value: 3.5,
                ownType: "rating"
            },
            activeQuestions: {
                value: 28,
                ownType: "activeQuestions"
            },
            attempts: {
                value: 13,
                ownType: "attempts"
            },
        },
        {
            id: "#AV391K",
            title: "Analiza matematyczna",
            categories: "Matematyka, sesja 2022",
            lastUpdateDate: "13.02.2022",
            averageScore: {
                value: 34,
                ownType: "average"
            },
            rating: {
                value: 2.5,
                ownType: "rating"
            },
            activeQuestions: {
                value: 52,
                ownType: "activeQuestions"
            },
            attempts: {
                value: 76,
                ownType: "attempts"
            },
        },
        {
            id: "#AV391K",
            title: "Analiza matematyczna",
            categories: "Matematyka, sesja 2022",
            lastUpdateDate: "13.02.2022",
            averageScore: {
                value: 34,
                ownType: "average"
            },
            rating: {
                value: 2.5,
                ownType: "rating"
            },
            activeQuestions: {
                value: 52,
                ownType: "activeQuestions"
            },
            attempts: {
                value: 76,
                ownType: "attempts"
            },
        },
        {
            id: "#AV391K",
            title: "Analiza matematyczna",
            categories: "Matematyka, sesja 2022",
            lastUpdateDate: "13.02.2022",
            averageScore: {
                value: 34,
                ownType: "average"
            },
            rating: {
                value: 2.5,
                ownType: "rating"
            },
            activeQuestions: {
                value: 52,
                ownType: "activeQuestions"
            },
            attempts: {
                value: 76,
                ownType: "attempts"
            },
        },
        {
            id: "#AV391K",
            title: "Analiza matematyczna",
            categories: "Matematyka, sesja 2022",
            lastUpdateDate: "13.02.2022",
            averageScore: {
                value: 34,
                ownType: "average"
            },
            rating: {
                value: 2.5,
                ownType: "rating"
            },
            activeQuestions: {
                value: 52,
                ownType: "activeQuestions"
            },
            attempts: {
                value: 76,
                ownType: "attempts"
            },
        },
        {
            id: "#AV391K",
            title: "Analiza matematyczna",
            categories: "Matematyka, sesja 2022",
            lastUpdateDate: "13.02.2022",
            averageScore: {
                value: 34,
                ownType: "average"
            },
            rating: {
                value: 2.5,
                ownType: "rating"
            },
            activeQuestions: {
                value: 52,
                ownType: "activeQuestions"
            },
            attempts: {
                value: 76,
                ownType: "attempts"
            },
        },
        {
            id: "#AV391K",
            title: "Analiza matematyczna",
            categories: "Matematyka, sesja 2022",
            lastUpdateDate: "13.02.2022",
            averageScore: {
                value: 34,
                ownType: "average"
            },
            rating: {
                value: 2.5,
                ownType: "rating"
            },
            activeQuestions: {
                value: 52,
                ownType: "activeQuestions"
            },
            attempts: {
                value: 76,
                ownType: "attempts"
            },
        },
        {
            id: "#AV391K",
            title: "Analiza matematyczna",
            categories: "Matematyka, sesja 2022",
            lastUpdateDate: "13.02.2022",
            averageScore: {
                value: 34,
                ownType: "average"
            },
            rating: {
                value: 2.5,
                ownType: "rating"
            },
            activeQuestions: {
                value: 52,
                ownType: "activeQuestions"
            },
            attempts: {
                value: 76,
                ownType: "attempts"
            },
        }
    ]

    return (
        <div className="browse_tab_container">
            <SortByPanel data={sortByData()}/>
            <div className="add_exam_list_container">
                {gridData.map(data => (
                    <MainGridElement data={data} widths={"1fr 6fr 3fr 2fr"} isFirstId={true} idName={"id"}
                                     elementToShow={4}/>
                ))}
            </div>

        </div>
    );
};

export default BrowseTab;