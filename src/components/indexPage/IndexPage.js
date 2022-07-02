import React from 'react';
import './indexPageStyle.scss'
import FilterPanel from './filterPanel/FilterPanel'
import Header from '../common/header/Header'
import GridElement from './gridElement/GridElement'

const IndexPage = () => {




    const examList = [
        {
            id:1,
            creator:"Jarosław Tomaszewski",
            name:"Egzamin WIEIK z pierwszego semestru poprawkowy",
            category:"Podstawy programowania"
        },
        {
            id:2,
            creator:"Małgorzata Soroka",
            name:"Egzamin ASK z drugiego semestru pierwszy termin",
            category:"Architektura systemów komputerowych"
        },
        {
            id:3,
            creator:"Sebastian Nowak",
            name:"Egzamin WIEIK z pierwszego semestru poprawkowy",
            category:"Podstawy programowania"
        },
        {
            id:4,
            creator:"Patrycja Tomaszewska",
            name:"Egzamin WIEIK z pierwszego semestru poprawkowy",
            category:"Podstawy programowania"
        },
        {
            id:5,
            creator:"Patrycja Tomaszewska",
            name:"Egzamin WIEIK z pierwszego semestru poprawkowy",
            category:"Podstawy programowania"
        }
    ]

    return (
        <>
            <Header/>
            <div className="index_container">
                <FilterPanel/>
                <div className="index_grid_container">
                    {examList.map((exam)=>(
                        <GridElement key={exam.id} examData={exam}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default IndexPage;