import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Cam extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    render() {
        return (
            <div className="mt-5 pt-5">
                    <h1>Cam id: {JSON.stringify(this.props.match, null, 2)}</h1>
            </div>
        );
    }
}

export default Cam;
/*
<p>
<strong>Match Props: </strong>
<code>{JSON.stringify(this.props.match, null, 2)}</code>
</p>
<p>
<strong>Location Props: </strong>
<code>{JSON.stringify(this.props.location, null, 2)}</code>
</p>
*/