import React, {useState} from 'react';
import './loginPageStyle.scss'
import {Button, CircularProgress, TextField} from "@mui/material";
import {useQuery, gql, useLazyQuery, useMutation} from "@apollo/client";

const CREATE_APP_USER = gql`
    mutation{
        createAppUser
    }
`

const LOGIN = gql`
    query Login($privateToken:String){
        login(privateToken:$privateToken){
            id
            publicToken
            exams{
                title
                id
            }
        }
    }
`

const LoginPage = () => {
    const [privateToken, setPrivateToken] = useState('')

    let privateTokenTest = ''

    let handlePrivateTokenChange = (e) => {
        setPrivateToken(e)
        document.querySelector('.login_page_save_button').textContent = e.length > 0 ? "Login" : "Generate"
    }

    const [createAppUser, {
        error: createAppUserError,
        data: createAppUserData,
        loading: createAppUserLoading
    }] = useMutation(CREATE_APP_USER)
    const [login, {error: loginError, data: loginData, loading: loginoading}] = useLazyQuery(LOGIN)


    let handleLogin = () => {
        if (privateToken.length > 0) {
            console.log(privateTokenTest)
            login({
                variables: {
                    privateToken
                }
            })
        } else {
            createAppUser()
        }
    }


    if (createAppUserLoading) return <div className="login_page_container"><CircularProgress color="secondary"/></div>

    return (
        <div className="login_page_container">
            <div className="login_page_input_text">
                <h1>Login with token</h1>
                <p>Input your private token to <span style={{color: "#5B59B5"}}>login</span> or leave blank to generate
                    new</p>
                <TextField id="standard-basic" label="Private token" variant="outlined" value={privateToken}
                           onChange={e => handlePrivateTokenChange(e.target.value)} size={"small"}
                           style={{width: 220, margin: "auto"}}/>
                <div className="login_page_button_container">
                    <Button variant="text" className="login_page_save_button"
                            onClick={() => handleLogin()}>Generate</Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;