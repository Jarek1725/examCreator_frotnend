import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IndexPage from './components/indexPage/IndexPage'
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    palette: {
        primary: {
            main: '#f44336'
        },
        secondary: {
            main: "#f44336"
        }
    }
})
root.render(
    <ThemeProvider theme={theme}>
        <IndexPage/>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
