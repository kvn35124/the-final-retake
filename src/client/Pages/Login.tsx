import * as React from 'react';



class Login extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <h1>Login Page</h1>
        )
    }
}


interface LoginProps {}


interface LoginState {}




export default Login;