import React from "react";

class List extends React.Component {

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
}

// const List = () => {
//
//     const [numbers, setNumbers] = useState([1, 2, 3]);
//
//     const addNumber = () => {
//         const newNumber = Math.floor(Math.random() * 10);
//         const newArr = [...numbers, newNumber];
//         setNumbers(newArr);
//     };
//
//     return (
//         <div>
//             <ul>
//                 {numbers.map((num, index) => (
//                     <li key={index}>{num}</li>
//                 ))}
//             </ul>
//             <button onClick={addNumber}>Новое число</button>
//         </div>
//     );
// }

export default List;