import React, {useEffect, useState} from "react";

/*class List extends React.Component {

    state = {
        numbers: [1, 2, 3],
    };

    addRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 10);
        this.setState({
            numbers: [...this.state.numbers, newNumber],
        });
    };

    //был первый раз отображен, был внедрен в страницу
    componentDidMount() {
        console.log('COMPONENT WAS DISPLAYED');
    };

    //компонент произвел обновления, у него изменился props или state
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState, this.props, this.state);
        if (this.state.numbers !== prevState.numbers.length) {
            console.log("COMPONENT UPDATED!!");
        }
    };

    //до того, как компонент будет удален со страницы, я могу что-то сделать
    //допустим, до того как К.удалится например отправить запрос на сервер..(все что угодно)
    componentWillUnmount() {
        console.log("COMPONENT WILL BE DELETED")
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.numbers.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
                <button onClick={this.addRandomNumber}>NEW NUMBER</button>
            </div>
        );
    }
}*/

const List = () => {

    const [numbers, setNumbers] = useState([1, 2, 3]);
    const [count, setCount] = useState(0);

    const addNumber = () => {
        const newNumber = Math.floor(Math.random() * 10);
        const newArr = [...numbers, newNumber];
        setNumbers(newArr);
    };
    //когда произойдет какое-то действие(К была первый раз отображена или обновится,удалится)
    // я могу сделать что-то!! и вот это что-то будех раниться в коллбэке юзЭффекта
    // deps [] - 1 time --> ComponentDidMount + ComponentWillUnmount
    // deps  - each time any case (1 render, updates) --> ComponentDidUpdate
    // deps [numbers] - if numbers changed  --> ComponentDidUpdate(для numbers)

    //ComponentDidUpdate только для numbers
    useEffect(() => {
        console.log("NUMBERS LIST UPDATED");
    }, [numbers]);
    //ComponentDidUpdate только count
    useEffect(() => {
        console.log("COUNT LIST UPDATED");
    }, [count]);
    //ComponentDidUpdate
    useEffect(() => {
        console.log("COMPONENT UPDATED");
    },);
    //ComponentDidMount + ComponentWillUnmount
    useEffect(() => {
        console.log("DID MOUNT");
        return () => {
            console.log("WILL UNMOUNT");
        }
    }, []);


    return (
        <div>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <button onClick={addNumber}>NEW NUMBER</button>
        </div>
    );
}

export default List;