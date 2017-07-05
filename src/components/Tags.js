import React, {Component} from 'react';

import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

import {Button, Modal} from 'react-bootstrap';

class Tags extends Component {

    constructor(props) {
        super(props);
        this.state = {tags: []};

        this.handleChange   = this.handleChange.bind(this);
        this.handleSaveTags = this.handleSaveTags.bind(this);
    }

    handleChange(tags) {
        this.setState({tags})
    }

    handleSaveTags() {
        this.props.saveTags(this.state.tags);
        this.setState({tags: []});
    }

    render() {
        return (

            <Modal show={this.props.show}>

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <TagsInput value={this.state.tags} onChange={this.handleChange}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.handleSaveTags}
                            disabled={!this.state.tags.length}>Save</Button>
                </Modal.Footer>

            </Modal>
        )
    }
}

export default Tags;