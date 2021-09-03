import React, {useState} from "react";

function App() {

    const [numbers, setNumbers] = useState([1, 2, 3]);

    const addNumber = () => {
        const newNumber = Math.floor(Math.random() * 10);
        const newArr = [...numbers, newNumber];
        setNumbers(newArr);
    };

    return (
        <div className="App">
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <button onClick={addNumber}>Новое число</button>
        </div>
    );
}

export default App;
