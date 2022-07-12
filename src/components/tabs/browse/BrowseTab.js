import React from 'react';
import './browseTabStyle.scss';
import SortByPanel from "../../common/sortByPanel/SortByPanel";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import MainGridElement from "../../mainGridElement/MainGridElement";
import BrowseRightPanel from "./rightPanel/BrowseRightPanel";
import BrowseTabMainGridPanel from "./BrowseTabMainGridPanel";
import {useQuery, gql} from "@apollo/client";

const GET_APP_USERS = gql`
    query{
        getAllAppUser{
            id
            privateToken
            publicToken
            exams{
                title
            }
        }
    }
`

const BrowseTab = () => {

    const {error, data, loading} = useQuery(GET_APP_USERS)

    console.log(`Errors: ${error}`)
    console.log(`Data: ${data}`)
    console.log(data)
    console.log(`Loading: ${loading}`)

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
            name: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: 75,
            rating: 4,
            activeQuestions: 23,
            attempts: 23
        }, {
            id: "#32FZ6H",
            name: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: 75,
            rating: 4,
            activeQuestions: 23,
            attempts: 23
        }, {
            id: "#32FZ6H",
            name: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: 75,
            rating: 4,
            activeQuestions: 23,
            attempts: 23
        }, {
            id: "#32FZ6H",
            name: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: 75,
            rating: 4,
            activeQuestions: 23,
            attempts: 23
        }, {
            id: "#32FZ6H",
            name: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: 75,
            rating: 4,
            activeQuestions: 23,
            attempts: 23
        }, {
            id: "#32FZ6H",
            name: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: 75,
            rating: 4,
            activeQuestions: 23,
            attempts: 23
        },{
            id: "#32FZ6H",
            name: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: 75,
            rating: 4,
            activeQuestions: 23,
            attempts: 23
        },{
            id: "#32FZ6H",
            name: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: 75,
            rating: 4,
            activeQuestions: 23,
            attempts: 23
        },{
            id: "#32FZ6H",
            name: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: 75,
            rating: 4,
            activeQuestions: 23,
            attempts: 23
        },
    ]

    return (
        <div className="browse_tab_container">
            <SortByPanel data={sortByData()}/>
            <div className="browse_tab_divider">
                <div className="add_exam_list_container">
                    {gridData.map(data => (
                        // <MainGridElement data={data} widths={"1fr 6fr 3fr 2fr"} isFirstId={true} idName={"id"}
                        //                  elementToShow={4}/>
                        <BrowseTabMainGridPanel data={data}/>
                    ))}
                </div>
                <div className="browse_tab_your_history_panel">
                    <BrowseRightPanel/>
                </div>
            </div>
        </div>
    );
};

export default BrowseTab;