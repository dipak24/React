import {connect} from 'react-redux';

import Dashboard from './dashboard';
import {saveMovie, setLoder} from '../../actions/movieActions';

const mapStateToProps = state => ({
    movies: state.movies.movies,
    loading: state.movies.loading
})

export default connect(
    mapStateToProps, {
        mySaveMovies: (movies) => saveMovie(movies),
        mySetLoader: (isLoading) => setLoder(isLoading)
    }
)(Dashboard);