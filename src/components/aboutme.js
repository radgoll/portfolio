import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

 
class About extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={8}>
                        <h2 style={{paddingTop: '1em', textAlign: 'center', fontFamily: 'Cormorant'}}>About Sebastian</h2>
                        <hr style={{marginBottom: '1px solid #b1b1b1'}}></hr>
                        <p style={{marginTop: '3em', marginLeft: '5em', marginRight: '5em', textAlign: 'center', fontFamily: 'Nimbus Mono'}}>
                            Hey, I am Sebastian. 31 years old and Front end Developer based in Roquebrune Cap Martin, France. My passion is 
                            web development. I have gained a lot of experience with designing and developing numerious websites, Wordpress themes
                            and JavaScript web.

                            Currently, I work as freelance Front end Developer for clients based in USA, Australia and United Kingdom.

                            When not writing code, I realy enjoy learning new stuff, cooking delicious food and cycling.
                        </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;