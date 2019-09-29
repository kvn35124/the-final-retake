import * as React from 'react';



class New extends React.Component<NewProps, NewState> {

    constructor(props: NewProps) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <h1>New Page</h1>
        )
    }
}


interface NewProps {}


interface NewState {}




export default New;