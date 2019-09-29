import * as React from 'react';



class Register extends React.Component<RegisterProps, RegisterState> {

    constructor(props: RegisterProps) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <h1>Register Page</h1>
        )
    }
}


interface RegisterProps {}


interface RegisterState {}




export default Register;