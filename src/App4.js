import React, {useState} from "react";
import "./index.css";
import Count from "./components/Count";
import IsFive from "./components/IsFive";

function App4() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);


    return (
        <div className="App">

            <h5>Counter1: </h5>
            <div className="counter">
                <button onClick={() => setCount1(count1 + 1)}>+</button>
                <Count id={1} value={count1}/>
            </div>

            <h5>Counter2: </h5>
            <div className="counter">
                <button onClick={() => setCount2(count2 + 1)}>+</button>
                <Count id={1} value={count2}/>
                <IsFive value={count2}/>
            </div>

        </div>
    );
}

export default App4;

//useMemo(func, [deps]) - будет выполнять ф-цию func и будет возвращать ее результат  - hook
// при этом следит за зависимостями (если они меняются => ф-ция тогда выполняется)
//когда рез-т выполнился и вернулся,useMemo сохранит этот рез-т и будет возвращать каждый раз, если deps не меняются
//useMemo позволяет вып-ть сложные ф-ции только тогда, когда это реально необходимо!!!


//React.memo - HOC
//если Компонент всегда рендерит одно и тоже, при этом пропсы не меняются => оборачиваем в React.memo
//для повышения производительности приложения, Мемо исп-ет результат пред. рендера этого К.
//и будет ихбегать повторных ререндеров, что оч круто
//React.memo делает поверх.сравнение пропсов (shallow equal),
// сравнение по ссылкам старых и новых пропс (prevProps<>newProps) =>
//если ссылки не изменились, К. ререндер НЕ ДЕЛАЕТ !!
//РЕРЕНДЕР делаю только в том случае, если пропсы поменялись
//если 2 параметром не передаем нашу кастомную ф-цию, Реакт.мемо делает поверх.проверку - shallow equal)

//useMemo и React.memo схожи, но у них разл.применение
//useMemo -  hook
//React.memo -HOC, больше вспомогат.ф-ция для К-тов , его не получится использовать для НЕ К. (числа, строки..)