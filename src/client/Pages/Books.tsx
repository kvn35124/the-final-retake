import * as React from 'react';
import { Link } from 'react-router-dom';



class Books extends React.Component<BooksProps, BooksState> {

    constructor(props: BooksProps) {
        super(props);
        this.state = {
            books: [],
        }
    }

    async componentDidMount() {
        try {
            let results = await fetch(`/api/books`);
            let books = await results.json();
            console.log(books);
            this.setState({ books })
            console.log(books);
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <section className="row">
                <article className="col">
                    <h1 className="text-center">Check Out Our Selections!</h1>
                    {this.state.books.map(book => (
                        <div className="card border border-dark">
                            <div className="card-body">
                                <h2 className="card-title text-center">{book.title}</h2>
                                <p className="card-text">{book.author}</p>
                                <p className="card-text">{book.name}</p>
                                <p className="card-text">{book.price}</p>
                                <Link to={`/books/${book.id}`} className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        )
    }
}


interface IBook {
    id: number;
    categoryid: number;
    title: string;
    author: string;
    price: number;
    name: string;
}


interface BooksProps { }


interface BooksState {
    books: Array<IBook>
}




export default Books;