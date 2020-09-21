import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    
    toggleCategories() {
        if(this.state.activeTab === 0) {
            return( 
                <div className="project-grid">
                {/* Project 1  */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Real time chat application</CardTitle>
                <CardText>
                    Real time chat application project with made in React.js, Socket.io and Node.js
                </CardText>
                <CardActions border>
                    <Button href="https://github.com/radgoll/chat-application" colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button href="https://falbachat.netlify.app" colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
                {/* Project 2  */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>My portfolio project</CardTitle>
                <CardText>
                   Project carried out using the React.js library
                </CardText>
                <CardActions border>
                    <Button href="https://github.com/radgoll/portfolio" colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button href="https://falbaportfolio.netlify.app" colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return(
                <div></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div></div>
            )
        }
    }
     
    render() {
        return(
            <div className="category-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;