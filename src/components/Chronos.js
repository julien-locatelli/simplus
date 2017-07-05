import React, {Component} from 'react';

import moment from 'moment';

import {
    Col,
    Button
} from 'react-bootstrap';

import {renderFormattedTime} from '../utils';

class Chronos extends Component {

    constructor(props) {
        super(props);

        this.startChronos    = this.startChronos.bind(this);
        this.stopChronos     = this.stopChronos.bind(this);
        this.renderTimeValue = this.renderTimeValue.bind(this);

        this.state = {
            chronosTime: props.timeValue,
            hasStarted : false
        };

        this.chronosInterval = null;
    }

    componentWillReceiveProps(props) {
        this.setState({chronosTime: props.timeValue});
    }

    startChronos() {

        this.startTime = moment();

        this.renderTimeValue();
        this.setState({hasStarted: true});
        this.chronosInterval = setInterval(this.renderTimeValue);
    }

    renderTimeValue() {
        const diff = moment().diff(this.startTime, 'milliseconds');
        this.setState({chronosTime: diff});
    }

    stopChronos() {
        this.setState({hasStarted: false});
        clearInterval(this.chronosInterval);
        this.props.onStop(this.state.chronosTime);
    }

    render() {

        return (
            <div>

                <Col xs={12}>
                    <div className="chronosTime">
                        {renderFormattedTime(this.state.chronosTime)}
                    </div>
                </Col>

                <Col>
                    {!this.state.hasStarted &&
                    <Button block
                            onClick={this.startChronos}>
                        Start
                    </Button>}

                    {this.state.hasStarted &&
                    <Button block
                            onClick={this.stopChronos}>
                        Stop
                    </Button>}

                </Col>
            </div>
        )
    }
}

export default Chronos;