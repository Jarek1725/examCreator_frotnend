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
            main: '#5B59B5'
        }
    }
})

const meta = {
    content:{
        width:"device-width",
        initialScale:1
    }
}

root.render(
    <ThemeProvider theme={theme}>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />

        <IndexPage/>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
