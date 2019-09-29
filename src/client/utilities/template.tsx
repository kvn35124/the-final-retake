import * as React from 'react';



class Template extends React.Component<TemplateProps, TemplateState> {

    constructor(props: TemplateProps) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <h1>Template Page</h1>
        )
    }
}


interface TemplateProps {}


interface TemplateState {}




export default Template;