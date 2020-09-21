import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://iili.io/2IOxmG.jpg"
                            alt="avatar" 
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Front End Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJs | Express | MongoDB</p>

                        <div className="social-links">
                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/sebastian-falba-a591b9195/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"n/>
                            </a>
                              {/* Github */}
                              <a href="http://github.com/radgoll" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"n/>
                            </a>
                              {/* Freecodecamp */}
                              <a href="http://freecodecamp.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true"n/>
                            </a>
                              {/* Youtube */}
                              <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"n/>
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;