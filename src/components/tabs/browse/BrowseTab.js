import React, {useEffect, useState} from 'react';
import './browseTabStyle.scss';
import SortByPanel from "../../common/sortByPanel/SortByPanel";
import {CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import BrowseRightPanel from "./rightPanel/BrowseRightPanel";
import BrowseTabMainGridPanel from "./BrowseTabMainGridPanel";
import {gql, useLazyQuery, useQuery} from "@apollo/client";
import getAllExams from "../../graphQl/getAllExams";


const GET_EXAMS = (gql`
    query Exams($category:String, $school:String, $sortBy:String){
        exams(filter:{category:$category, school:$school}, sortBy:$sortBy){
            id
            title
            createDate
            averageScore
            publicId
            colorValue
            averageExamRating
            examRatings{
                id
                appUser{
                    id
                }
            }
            questions {
                isHidden
            }
            categories{
                value
            }
            attempts{
                score
            }
        }
    }
`)


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
                            onChange={(e) => setSortBy(e.target.value)}
                            label="Age"
                            variant="standard"
                        >
                            <MenuItem value={"1"}>Title</MenuItem>
                            <MenuItem value={"2"}>Most attempts</MenuItem>
                            <MenuItem value={"3"}>Rating</MenuItem>
                            <MenuItem value={"4"}>Last update</MenuItem>
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
                               onChange={(e) => setSchool(e.target.value)}
                    />
                ),
                (
                    <TextField id="outlined-basic" label="Category" variant="standard" size="small" style={{
                        width: 160,
                        marginRight: 50
                    }}
                               sx={{input: {color: '#707070'}}}
                               onChange={(e) => setCategory(e.target.value)}
                    />
                )
            ]

        );
    }

    const [category, setCategory] = useState(null)
    const [school, setSchool] = useState(null)
    const [sortBy, setSortBy] = useState(null)


    const {
        error: getExamsError,
        data: getExamsData,
        loading: getExamsLoading,
        refetch: getExamsRefetch
    } = useQuery(getAllExams(), {
        variables: {
            category,
            school,
            sortBy
        }
    })

    return (
        <div className="browse_tab_container">
            <SortByPanel data={sortByData()}/>
            <div className="browse_tab_divider">
                <div className="add_exam_list_container">
                    {getExamsLoading ?
                        <div className="browse_tab_loader_container"><CircularProgress
                            color="secondary"/></div>
                        :
                        (
                            getExamsData.exams.map(data => (
                                <div key={data.id}>
                                    <BrowseTabMainGridPanel data={data} key={data.id}/>
                                </div>
                                // <MainGridElement data={data} widths={"1fr 6fr 3fr 2fr"} isFirstId={true} idName={"id"}
                                //                  elementToShow={4}/>
                            ))
                        )
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