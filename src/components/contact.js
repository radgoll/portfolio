import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sebastian Falba</h2>
                        <img src="https://iili.io/2IOxmG.jpg" 
                        alt="avatar" style={{height: '250px'}}/>
                        <p style={{width:'75%', margin: 'auto', paddingTop: '1em'}}>I'm Sebastian Falba. 
                        I'm a web developer who designs. I've worked internationally, in-house and remotely on projects
                        for leading brands, agencies, and startups. I care deeply about creating world-class, useful websites
                        and web applications. I can be as involved in your project as you need me to be. 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Nimbus Mono'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/> 
                                +33755086503
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Nimbus Mono'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/> 
                                sfalba@protonmail.ch
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Nimbus Mono'}}>
                                <i className="fa fa-skype" aria-hidden="true"/> 
                                sebastian.falba
                            </ListItemContent>
                        </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;