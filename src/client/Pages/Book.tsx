import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { json } from '../utilities/api';



class Book extends React.Component<BookProps, BookState> {

    constructor(props: BookProps) {
        super(props);
        this.state = {
            title: '',
            author: '',
            price: 0,
            name: ''
        }
    }



    async handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        try {
            let results = await json(`/api/books/${this.props.match.params.id}`, 'DELETE');
            if(results.ok) {
                this.props.history.push('/books');
            }
        } catch (error) {
            console.log(error);
        }
    }


    async componentDidMount() {
        try {
            let results = await fetch(`/api/books/${this.props.match.params.id}`);
            let book = await results.json();
            this.setState({
                title: book.title,
                author: book.author,
                name: book.name,
                price: book.price
            });
        } catch (error) {
            console.log(error);
        }
    }




    render() {
        return (
            <section className="row">
                <article className="col">
                    <div className="card border border-dark">
                        <div className="card-body">
                            <h2 className="card-title text-center">{this.state.title}</h2>
                            <p className="card-text">{this.state.author}</p>
                            <p className="card-text">{this.state.name}</p>
                            <p className="card-text">{this.state.price}</p>
                            <div className="d-flex justify-content-around">
                                <Link to='/books' className="btn btn-primary" >Back</Link>
                                <Link to={`/update/${this.props.match.params.id}`} className="btn btn-warning">Edit</Link>
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleDelete(e)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}


interface BookProps extends RouteComponentProps<{ id: string }> { }


interface BookState {
    title: string;
    author: string;
    price: number;
    name: string;
}




export default Book;