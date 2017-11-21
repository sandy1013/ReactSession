/* Alterantive Way
    import React from 'react';

    const todoEditor = () => {
        return <p>Test Data</p>
    }

    export default todoEditor; 
*/

import React, { Component } from 'react';

class TodoEditor extends Component {
    render() {
        return (<div>
            <p onClick={this.props.click}>{this.props.title}</p>
            <p>{this.props.description}</p>
            <input onChange={this.props.change} value={this.props.children}></input>
        </div>)
    }
}

export default TodoEditor;