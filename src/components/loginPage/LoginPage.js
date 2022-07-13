import React, {useState} from 'react';
import './loginPageStyle.scss'
import {Alert, Button, CircularProgress, Snackbar, TextField} from "@mui/material";
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

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    let handlePrivateTokenChange = (e) => {
        setPrivateToken(e)
        document.querySelector('.login_page_save_button').textContent = e.length > 0 ? "Login" : "Generate"
    }

    const [createAppUser, {
        error: createAppUserError,
        data: createAppUserData,
        loading: createAppUserLoading
    }] = useMutation(CREATE_APP_USER)

    const [login, {error: loginError, data: loginData, loading: loginLoading}] = useLazyQuery(LOGIN)


    let handleLogin = () => {
        if (privateToken.length > 0) {
            login({
                variables: {
                    privateToken
                }
            }).then(data => {
                if (data.error) {
                    document.querySelector("#login_page_error").style.opacity = 1
                    setTimeout(function(){
                        document.querySelector("#login_page_error").style.opacity = 0
                    }, 3000)
                }
            })

        } else {
            createAppUser()
        }
    }


    if (createAppUserLoading || loginLoading) return <div className="login_page_container"><CircularProgress
        color="secondary"/></div>

    return (
        <div className="login_page_container">
            <div className="login_page_input_text">
                <p id="login_page_error">Cannot find user</p>
                <h1>Login with token</h1>
                <p>Input your private token to <span style={{color: "#5B59B5"}}>login</span> or leave blank <br/> to
                    generate new</p>
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