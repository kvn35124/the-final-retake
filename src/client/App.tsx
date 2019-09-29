import * as React from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Books from './Pages/Books';
import New from './Pages/New';
import Update from './Pages/Update';
import Book from './Pages/Book';

class App extends React.Component<IAppProps, IAppState> {

   

    render() {
        return (
            <Router>
                <main className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-around">
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/books">Books</Link>
                        <Link to="/books/new">New Book</Link>
                    </nav>
                </main>
                <Switch>
                    <Route exact path="/" component= {Home} />
                    <Route exact path="/login" component= {Login} />
                    <Route exact path="/register" component= {Register} />
                    <Route exact path="/books" component= {Books} />
                    <Route exact path="/books/new" component= {New} />
                    <Route exact path="/update/:id" component= {Update} />
                    <Route exact path="/books/:id" component= {Book} />
                </Switch>
            </Router>
        )
    }
}

export interface IAppProps { }

export interface IAppState { }

export default App;