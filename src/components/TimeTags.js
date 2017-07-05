import React, {Component} from 'react';

import {
    Table
} from 'react-bootstrap';

import {renderFormattedTime} from '../utils';

const renderFormattedTags = (tags) => {
    return tags.map((tag, index) => (
        <span key={index} className="chip">{tag}</span>
    ));
};

class TimeTags extends Component {

    render() {

        return (

            <Table responsive striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Time</th>
                    <th>Tags</th>
                </tr>
                </thead>
                <tbody>
                {this.props.array.map((row, index) => (
                    <tr key={index}>
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