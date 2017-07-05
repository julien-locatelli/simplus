import React, {Component} from 'react';
import moment from 'moment';

import {
    Table
} from 'react-bootstrap';

import {renderFormattedTime} from '../utils';

const renderFormattedTags = (tags) => {
    return tags.map((tag, index) => (
        <span key={index} className="chip">{tag}</span>
    ));
};

const renderFormattedDate = (timestamp) => {
    if(timestamp)
        return moment(timestamp).fromNow();
};

class TimeTags extends Component {

    render() {

        return (

            <Table responsive striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Tags</th>
                </tr>
                </thead>
                <tbody>
                {this.props.array.map((row, index) => (
                    <tr key={index}>
                        <td>{renderFormattedDate(row.timestamp)}</td>
                        <td>{renderFormattedTime(row.time)}</td>
                        <td>{renderFormattedTags(row.tags)}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )
    }
}

export default TimeTags;