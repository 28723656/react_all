import React, {Component} from 'react'
import {INCREMENT, DECREMENT} from "../redux/action-types";

export default class App extends Component {

    // 更新状态的操作交给redux做
    /*    state = {
            count: 0
        }*/

    increment = () => {
        const num = this.refs.numSelect.value * 1
        /*  const count = this.state.count + num
          this.setState({count})*/

        // 调用store的方法更新
        this.props.store.dispatch({type: INCREMENT, data: num});

    }

    decrement = () => {
        const num = this.refs.numSelect.value * 1
        // 调用store的方法更新
        this.props.store.dispatch({type: DECREMENT, data: num});
    }

    incrementIfOdd = () => {
        const num = this.refs.numSelect.value * 1
        const count = this.props.store.getState()
        if (count % 2 === 1) {
            // 调用store的方法更新
            this.props.store.dispatch({type: INCREMENT, data: num});
        }
    }

    incrementAsync = () => {
        const num = this.refs.numSelect.value * 1
        setTimeout(() =>{
            // 调用store的方法更新
            this.props.store.dispatch({type: INCREMENT, data: num});
        },1000)
    }

    render() {
        // 得到状态
        /* const {count} = this.state*/

        // 在store中获取
        const count = this.props.store.getState();

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
