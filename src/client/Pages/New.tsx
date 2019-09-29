import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { json } from '../utilities/api';



class New extends React.Component<NewProps, NewState> {

    constructor(props: NewProps) {
        super(props);
        this.state = {
            title: '',
            author: '',
            price: '',
            categories: [],
            categoryid: ''
        }
    }


    async componentDidMount() {
        try {
            let results = await json(`/api/categories`);
            this.setState({ categories: results })
        } catch (error) {
            console.log(error);
        }
    }

    async handleSubmit() {
        event.preventDefault();
        let newbook = {
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            categoryid: this.state.categoryid
        }
        try {
            let results = await json('/api/books', 'POST', newbook);
            if (results.ok) {
                this.props.history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

   


    render() {
        return (
            <section className="row">
                <article className="col">
                    <form className="form-group border border-dark">
                        <label >Title:</label>
                        <input value={this.state.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })} type="text" className="form-control" />
                        <label >Author:</label>
                        <input value={this.state.author} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ author: e.target.value })} type="text" className="form-control" />
                        <label >Price:</label>
                        <input value={this.state.price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ price: e.target.value })} type="text" className="form-control" />
                        <label >Category:</label>
                        <select value={this.state.categoryid} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ categoryid: e.target.value })} className="form-control">
                            <option value="0">Select Category...</option>
                            {this.state.categories.map(category => (
                                <option value={category.id}>{category.name}</option>
                            ))}
                        </select>
                        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()} className="btn btn-primary">Submit</button>
                    </form>
                </article>
            </section>
        )
    }
}


export interface ICategories {
    id: number;
    name: string;
}


interface NewProps extends RouteComponentProps<{ id: string }> { }


interface NewState {
    title: string;
    author: string;
    price: string;
    categories: Array<ICategories>;
    categoryid: string;
 }




export default New;