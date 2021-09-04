import React, {useEffect, useState, useRef} from "react";
import "./index.css";

function App2() {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    //ссылка на ДОМ элемент внутри переменной ulRef
    const ulRef = useRef();

    const addNumber = () => {
        const lastNumber = numbers[numbers.length - 1];
        setNumbers([...numbers, lastNumber + 1]);
    };

    const handleScroll = () => {
        console.log('Был скролл');
    };

    useEffect(() => {
        //ulElem.document.querySelector('ul');
        //на ДОМ элементе (у нас ul), на чем угодно, в ref мы помещаем useRef, кот будет задавать
        //задавать в current ссылку на свой ДОМ-элемент
        ulRef.current.addEventListener('scroll', handleScroll);
    }, []);

    const removeScroll = () => {
        //ulElem.removeEventListener('scroll', handleScroll);
        ulRef.current.removeEventListener('scroll', handleScroll);
    };

    return (
        <div className="App">
            <ul ref={ulRef}>
                {numbers.map((n, index) => (
                    <li key={index}>{n}</li>
                ))}
            </ul>
            <button onClick={addNumber}>✅ Add Number</button>
            <button onClick={removeScroll}>❌ Don't follow</button>
        </div>
    );
}

export default App2;

//useRef - для работы с ДОМ-элементами; в нем хранится ссылка на ДОМ элемент
//        и она не теряется, если происходит обновление компонента Арр или другого К.
//useRef - для хранения др данных (хранить число, объектыб еще.... или что-то еще)

export function App3() {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const timerRef = useRef();

    const addNumber = () => {
        setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
    };

    const start = () => {
        timerRef.current = setInterval(addNumber, 1000);
    };

    const stop = () => {
        console.log(timerRef.current);
        clearInterval(timerRef.current);
    };

    return (
        <div className="App">
            <ul>
                {numbers.map((n, index) => (
                    <li key={index}>{n}</li>
                ))}
            </ul>
            <button onClick={addNumber}>✅ Add Number</button>
            <button onClick={start}>🚀 START</button>
            <button onClick={stop}>🕗 STOP</button>
        </div>
    );
}
