import React, {Component} from 'react';

import Chronos from './components/Chronos';
import Tags from './components/Tags';
import TimeTags from './components/TimeTags';

import WorkingTimeService from './services/WorkingTime';

import {
    Col,
    Row,
    Jumbotron
} from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chronosTime  : 0,
            timeTagsArray: [{time: 10003, tags: ['tag1', 'tag2']}]
        };

        this.addTags = this.addTags.bind(this);
    }

    componentWillMount() {
        WorkingTimeService.getWorkingTimeArray()
            .then(workingTimeArray => this.setState({timeTagsArray: workingTimeArray}));
    }

    addTags(tags) {

        const newTimeTagElement = {
            time: this.state.chronosTime,
            tags
        };

        const timeTagsArray = this.state.timeTagsArray.concat(newTimeTagElement);

        this.setState({
            timeTagsArray,
            chronosTime  : 0
        });

        WorkingTimeService.saveWorkingTimeArray(timeTagsArray);
    }

    render() {

        return (

            <div className="container">
                <h1>Exercice</h1>

                <Row>
                    <Col xs={6} xsOffset={3}>
                        <Jumbotron>
                            <Chronos timeValue={this.state.chronosTime}
                                     onStop={chronosTime => this.setState({chronosTime})}/>
                        </Jumbotron>
                    </Col>

                    {!!this.state.chronosTime &&
                    <Col xs={6} xsOffset={3}>
                        <Tags saveTags={this.addTags}/>
                    </Col>}

                    {!!this.state.timeTagsArray.length &&
                    <Col xs={12}>
                        <TimeTags array={this.state.timeTagsArray}/>
                    </Col>}
                </Row>
            </div>
        );
    }
}

export default App;
