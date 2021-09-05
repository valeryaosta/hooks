import React from "react";

const Button = React.memo(({onPlus, onMinus}) => {

    console.log('Buttons render');

    return (
        <div>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
        </div>
    );
});

export default Button;

//React.memo здесь помогает предотвратить лишний ререндер кнопок,
//перед тем как делать ререндер проследит изменится ли ссылка на onPlus, onMinus -пропсы,
//если эти пропсы не изменились, ререндер происходить не будет