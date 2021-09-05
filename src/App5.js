import React, {useCallback, useState} from "react";
import "./index.css";
import Button from "./components/Button";


function App5() {

    const [count, setCounter] = useState(0);
    //ссылки на наши фуекции остаются, они не перетираются, при этом мемоизируем Баттонс
    const onPlus = useCallback(() => setCounter((count) => count + 1), []);
    const onMinus = useCallback(() => setCounter((count) => count - 1), []);

    return (
        <div className="App">
            <h1>{count}</h1>
            <Button onPlus={onPlus} onMinus={onMinus}/>
        </div>
    );
}

export default App5;

