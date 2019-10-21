import React, { Component } from 'react'

export default class Comp extends Component {
    constructor(props){
        super(props)
        this.txt = React.createRef()  // { current:null }
    }
    handleClick = e => {
        // this.txt.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={(dom) => {
                    this.el = dom
                }}/>
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}
