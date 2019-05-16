import React, {Component} from 'react'

class App extends Component {

    state = {
        count: 2,
        selectedCount:'1'
    }

    // 选择
    handleSelect = (e) =>{
        this.setState({selectedCount:e.target.value})
    }

    // 增加
    increment = () =>{
     const {selectedCount,count} =this.state;
     const addCount = count + parseInt(selectedCount);
     this.setState({count:addCount})
    }

    // 如果是奇数才增加
    incrementIfOdd = () =>{
        const {selectedCount,count} =this.state;
        if(count % 2 ==1 ){
            const addCount = count + parseInt(selectedCount);
            this.setState({count:addCount});
        }
    }

    // 异步增加
    incrementAsync = () =>{
        const {selectedCount,count} =this.state;
        const addCount = count + parseInt(selectedCount);

        setTimeout( () =>{
            this.setState({count:addCount})
        },1000)

    }


    // 减少
    decrement = () =>{
        const {selectedCount,count} =this.state;
        const addCount =count - parseInt(selectedCount);
        this.setState({count:addCount});
    }




    render() {

        const {count} = this.state

        return (
            <div>
                <p>点击 {count} 次</p>
                <div>
                    <select onChange={this.handleSelect} >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>&nbsp;
                    <button onClick={this.increment} >+</button>
                    &nbsp;
                    <button onClick={this.decrement}>-</button>
                    &nbsp;
                    <button onClick={this.incrementIfOdd} >如果是奇数，增加</button>
                    &nbsp;
                    <button onClick={this.incrementAsync} >异步</button>
                </div>

            </div>
        )
    }
}

export default App
