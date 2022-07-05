import React from 'react';
import './mainGridElement.scss'

const MainGridElement = (props) => {

    const backgroundsColors = [
        "#FFC5FB",
        "#9FDEFD",
        "#CCA7ED",
        "#C8EDA7",
        "#82A4F7",
        "#FDDD9F",
        "#E38C9B"
    ]

    let getRandomColor = () => {

        return backgroundsColors[Math.floor(Math.random() * backgroundsColors.length)]
    }

    return (
        <div className="main_grid_element_container">
            <div className="main_grid_element_container_top" style={{
                gridTemplateColumns: props.widths
            }}>
                {
                    Object.keys(props.data).map((key, index) => (
                        index < props.elementToShow ?
                            (
                                props.isFirstId && key === props.idName ?
                                    <div className="single_grid_element_container_id">
                                        <p className="single_grid_element_container_id"
                                           style={{background: getRandomColor()}}>
                                            {props.data[key]}
                                        </p>
                                    </div> :
                                    <div className="single_grid_element_container">
                                        <p className="single_grid_element_container_text">
                                            {props.data[key]}
                                        </p>
                                    </div>
                            ) : ('')
                    ))}
            </div>
            <div className="main_grid_element_container_bottom" style={{
                gridTemplateColumns: `repeat(${Object.keys(props.data).length-props.elementToShow}, 1fr)`
            }}>
                {
                    Object.keys(props.data).map((key, index) => (
                        index >= props.elementToShow ?
                            (
                                props.isFirstId && key === props.idName ?
                                    <div className="single_grid_element_container_id">
                                        <p className="single_grid_element_container_id"
                                           style={{background: getRandomColor()}}>
                                            {props.data[key]}
                                        </p>
                                    </div> :
                                    <div className="single_grid_element_container">
                                        <p className="single_grid_element_container_text">
                                            {props.data[key]}
                                        </p>
                                    </div>
                            ) : ('')
                    ))}
            </div>
        </div>
    );
};

export default MainGridElement;