import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {

    static propTypes ={
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
    }


    // 更新状态的操作交给redux做
    increment = () => {
        const num = this.refs.numSelect.value * 1

        // 调用store的方法更新
        this.props.increment(num);

    }

    decrement = () => {
        const num = this.refs.numSelect.value * 1
        // 调用store的方法更新
        this.props.decrement(num);
    }

    incrementIfOdd = () => {
        const num = this.refs.numSelect.value * 1
        const count = this.props.count
        if (count % 2 === 1) {
            // 调用store的方法更新
            this.props.increment(num);
        }
    }

    incrementAsync = () => {
        const num = this.refs.numSelect.value * 1
        setTimeout(() =>{
            // 调用store的方法更新
            this.props.increment(num);
        },1000)
    }

    render() {

        // 在store中获取
        const {count} = this.props

        return (
            <div>
                <p>
                    click {count} times {' '}
                </p>
                <select ref="numSelect">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>{' '}
                <button onClick={this.increment}>+</button>
                {' '}
                <button onClick={this.decrement}>-</button>
                {' '}
                <button onClick={this.incrementIfOdd}>increment if odd</button>
                {' '}
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        )
    }
}


export default Counter
