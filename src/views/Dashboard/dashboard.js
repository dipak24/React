import React from 'react';

import {Alert, Row } from 'react-bootstrap'

import { MOVIE } from '../../config/url';
import {get} from '../../utils/httpUtils'

class dashBoard extends React.Component {

    //idb free api
    constructor() {
        super();

        this.state = {
            searchText: '',
            movies : '',
            loading: false
        }
    }

    searchMovie = (e) => {
        e.preventDefault();

        console.log(MOVIE)
        console.log(this.state.searchText)

        this.setState({loading: true})
        let url = `${MOVIE}${this.state.searchText}`;
        url = MOVIE + this.state.searchText

        url = MOVIE.replace(':search', this.state.searchText)

        console.log(url)

        get(url)
        .then( response => {
            console.log( response.data.Search ) 
            this.setState({loading: false, movies: response.data.Search})
        })

        .catch(err => {
            console.log('err', err);
            alert('sorry something went wrong')
            this.setState({loading: false})
        });

    }
   
    render() {
        if(this.state.loading) return <div>loading....</div>

        return(
            <section className="header">
                <div className="header-nav">
                <Alert bsStyle="warning">
                    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
                    good.
                </Alert>;
                    <h1>Please Search latest mivies</h1>
                </div>
                <div className="form-wrap per">
                    <form onSubmit={this.searchMovie}>
                        <input type="text" onChange={this._handleOnChange} value={this.state.searchText} />
                        {/* <button onClick={ this.searchMovie } > search </button>                    */}
                        <button type="submit">search</button>
                    </form>
                </div>
                <div className="movie-list" >
                    <ul>
                    
                       {
                           this.state.movies && this.state.movies.map(movie => <li key={movie.imdbID}>{movie.Title}</li>)
                       }
                    </ul>
                </div>
            </section>
        )
    }

    _handleOnChange = (e) => {
        this.setState({searchText: e.target.value})
    }
}

export default dashBoard;