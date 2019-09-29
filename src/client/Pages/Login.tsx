import * as React from 'react';
import { SetAccessToken, json } from '../utilities/api';
import { RouteComponentProps } from 'react-router';




class Login extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    async handleSubmit() {
        event.preventDefault();
        try {
            let result = await json(`/auth/login`, 'POST', {
                email: this.state.email,
                password: this.state.password
            });
            if(result) {
                SetAccessToken(result.token, { userid: result.userid, role: result.role });
                if(result.role === 'admin') {
                    this.props.history.push('/books/new');
                } else {
                    this.props.history.push('/')
                }
            } else {
                console.log('Invalid Credentials');
            }
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        return(
            <section className="row">
                <article className="col">
                    <form className="form-group border border-dark">
                        <label>Email:</label>
                        <input type="text" value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value})} className="form-control"/>
                        <label >Password:</label>
                        <input type="password" value={this.state.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value})} className="form-control"/>
                        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()} className="btn btn-primary my-2">Submit</button>
                    </form>
                </article>
            </section>
        )
    }
}


interface LoginProps extends RouteComponentProps {}


interface LoginState {
    email: string;
    password: string;
}




export default Login;