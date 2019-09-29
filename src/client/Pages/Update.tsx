import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ICategories } from './New';
import { json } from '../utilities/api';



class Update extends React.Component<UpdateProps, UpdateState> {

    constructor(props: UpdateProps) {
        super(props);
        this.state = {
            title: '',
            author: '',
            price: '',
            categoryid: '',
            categories: []
        }
    }

    async componentDidMount() {
        let results = await fetch(`/api/books/${this.props.match.params.id}`);
        let book = await results.json();
        this.setState({
            title: book.title,
            author: book.author,
            price: book.price,
            categoryid: book.categoryid
        })
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
            let results = await json(`/api/books/${this.props.match.params.id}`, "PUT", newbook);
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
                            <option value="">{this.state.categoryid}</option>
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


interface UpdateProps extends RouteComponentProps<{ id: string }> { }


interface UpdateState { 
    title: string;
    author: string;
    price: string;
    categoryid: string;
    categories: Array<ICategories>
}




export default Update;