import * as React from 'react';



class Home extends React.Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <div className="row">
                <div className="col">
                    <h1 className="text-center">Welcome! </h1>
                </div>
            </div>
        )
    }
}


interface HomeProps {}


interface HomeState {}




export default Home;