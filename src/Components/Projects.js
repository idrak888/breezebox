import React from 'react';
import proj1 from '../projectimages/nomical.png';
import proj2 from '../projectimages/moviedb.png';
import proj3 from '../projectimages/randomfacts.png';
import proj4 from '../projectimages/distortions.png';
import proj5 from '../projectimages/motorhead.png';

const Projects = props => {
    return (
        <div className="Projects">
            <h1>Portfolio</h1>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <a href="https://nomical.herokuapp.com"><img src={proj1}/></a>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://moviedb-react.firebaseapp.com"><img src={proj2}/></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <a href="https://idrak888.github.io/randomfacts-website/"><img src={proj3}/></a>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://distortions.herokuapp.com"><img src={proj4}/></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <a href="https://motorhead-automotive.firebaseapp.com"><img src={proj5}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;