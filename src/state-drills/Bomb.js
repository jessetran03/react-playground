import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            count: 0,
        };
        //console.log('constructor')
    }
    renderWord = () => {
        const { count } = this.state
        if (count >= 8) {
            clearInterval(this.interval)
            return 'BOOM!!!!'
        }
        else if (count % 2 === 0) {
            return 'tick'
        }
        else {
            return 'tock'
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            //console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                <p>{this.renderWord()}</p>
            </div>
        )
    }
}

export default Bomb;