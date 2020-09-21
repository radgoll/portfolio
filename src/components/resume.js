import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="https://iili.io/2IOxmG.jpg" 
                                alt="profile"
                                style={{height: '200px'}}
                             />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Sebastian Falba</h2>
                        <h4 style={{color: 'grey'}}>Front end developer</h4>
                        <hr style={{borderTop: '3px solid #607d8b', width: '50%'}}/>
                        <p style={{fontFamily: 'Cormorant', fontSize: '20px'}}>Energetic and inovative Front End Developer with 2 years experience building and maintaining
                        responsive websites in finance domain, automotive, pharmacy. Proficient in HTML, CSS, JavaScript, React.js. 
                        Passionate about usability and responsive website design. Implemented new responsive website
                        approach which increased mobile traffic by 20%. A polyglot programmer who speaks English, French
                        Polish and German.</p>
                        <hr style={{borderTop: '3px solid  #607d8b', width: '50%'}}/>
                        <h5>Adress</h5>
                        <p style={{fontFamily: 'Cormorant', fontSize: '20px'}}>06190 Roquebrune Cap Martin, France</p>
                        <h5>Phone</h5>
                        <p style={{fontFamily: 'Cormorant', fontSize: '20px'}}>+33755086503</p>
                        <h5>Email</h5>
                        <p style={{fontFamily: 'Cormorant', fontSize: '20px'}}>sfalba@protonmail.ch</p>
                        <h5>Website</h5>
                        <a href="https://github.com/radgoll"><p>https://github.com/radgoll</p></a>
                        <hr style={{borderTop: '3px solid  #607d8b', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h3>Education</h3>
                        <Education 
                        startYear={2008} 
                        endYear={2013}
                        schoolDescription="Information Technology"
                        schoolName="Szczecin University of Technology, Poland"
                         />
                         <hr style={{borderTop: '3px solid #adb8c2'}} />
                        <h3>Experience</h3>
                        <Experience 
                            startYear={2018}
                            endYear={2018}
                            jobName="Inigo Media, United Kingdom"
                            jobDescription=""
                        />
                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName="Screen Media, United Kingdom"
                            jobDescription=""
                        />
                        <hr style={{borderTop: '3px solid #adb8c2'}} />
                        <h3>Skills</h3>
                        <Skills 
                            skill="HTML/CSS"
                            progress="80"
                        />
                        <Skills 
                            skill="JavaScript"
                            progress="80"
                        />
                         <Skills 
                            skill="React"
                            progress="75"
                        />
                        <Skills 
                            skill="Node.js"
                            progress="50"
                        />
                        <Skills 
                            skill="PHP"
                            progress="75"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;