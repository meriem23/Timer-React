import React from 'react'
import { Component } from 'react'
import Times from './Times'


class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0,
            inter: false
        }
        setInterval(
            () => {
                this.state.inter &&
                    this.setState({
                        timeMs: this.state.timeMs + 1000
                    })
            },
            1000
        )
    }
    start = () => {
        if (!this.state.inter){
            this.setState({
                inter: true
            })
        } else {
this.setState({inter:false})
        }   
        }
    reset = () => {
        this.setState({timeMs: 0, inter: false})
    }   
    render() {
        return (
            <div className='buttons'>
                <Times ms={this.state.timeMs} />
                <input type='button'
                    value={this.state.inter ? 'Pause' : 'Start'}
                    className='startButton'
                    onClick={this.start} />
                <input type='button'
                    value='Reset'
                    className='resetButton'
                    onClick={this.reset} />
            </div>)
    }
}

export default Timer