import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IndexPage from './components/indexPage/IndexPage'
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    // uri: "https://examcreator-backend.herokuapp.com/graphql",
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    palette: {
        primary: {
            main: '#5B59B5'
        }
    }
})

const meta = {
    content: {
        width: "device-width",
        initialScale: 1
    }
}

root.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>

            <IndexPage/>
        </ThemeProvider>
    </ApolloProvider>
);

reportWebVitals();
