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

    render() {
        return (
            <div>
                <ul>
                    {this.state.numbers.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
                <button onClick={this.addRandomNumber}>Новое число</button>
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