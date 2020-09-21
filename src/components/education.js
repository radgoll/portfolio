import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return (    
            <Grid>
                <Cell col={4}>
                    <p style={{fontSize: '20px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={4}>
                    <h4 style={{marginTop: '0px', fontFamily:'Cormorant'}}>{this.props.schoolDescription}</h4>
                    <p>{this.props.schoolName}</p>
                </Cell>
            </Grid>
            )
    }
}

export default Education;
