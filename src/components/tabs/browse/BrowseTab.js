import React from 'react';
import './browseTabStyle.scss';
import SortByPanel from "../../common/sortByPanel/SortByPanel";
import {CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import BrowseRightPanel from "./rightPanel/BrowseRightPanel";
import BrowseTabMainGridPanel from "./BrowseTabMainGridPanel";
import {useQuery} from "@apollo/client";
import getAllExams from "../../graphQl/getAllExams";

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
            name: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: 75,
            rating: 4,
            activeQuestions: 23,
            attempts: 23
        }, {
            id: "#32FZ6Z",
            name: "Egzamin WIEIK z pierwszego semestru poprawkowy",
            categories: "Programowanie, Sesja 2021",
            lastUpdateDate: "03.07.2022",
            averageScore: 75,
            rating: 4,
            activeQuestions: 23,
            attempts: 23
        }
    ]

    const {error: getExamsError, data: getExamsData, loading: getExamsLoading} = useQuery(getAllExams())

    return (
        <div className="browse_tab_container">
            <SortByPanel data={sortByData()}/>
            <div className="browse_tab_divider">
                <div className="add_exam_list_container">
                    {getExamsLoading ?
                        <div className="browse_tab_loader_container"><CircularProgress
                            color="secondary"/></div>
                        :
                        gridData.map(data => (
                            <div key={data.id}>
                                <BrowseTabMainGridPanel data={data} key={data.id}/>
                            </div>
                            // <MainGridElement data={data} widths={"1fr 6fr 3fr 2fr"} isFirstId={true} idName={"id"}
                            //                  elementToShow={4}/>
                        ))
                    }

                </div>
                <div className="browse_tab_your_history_panel">
                    <BrowseRightPanel/>
                </div>
            </div>
        </div>
    );
};

export default BrowseTab;