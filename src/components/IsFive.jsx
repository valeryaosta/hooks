import React, {useMemo} from "react";

let renderCount = 0;

export default React.memo(function IsFive({value}) {
        console.warn(`🔴 IsFive render: ${++renderCount}`);

        const getResult = useMemo(() => {
            let i = 0;
            while (i < 600000000) i++;
            return value === 5 ? '✅ Это пять :D' : '❌ Это не пять :(';
        }, [value]);

        return <h3>{getResult}</h3>;
    },

    //каст проверочная ф-ция, до тех пор пока value!==5 ререндера не делай
    (prevProps, nextProps) => {
        //если в новых пропс value===5, сделай ререндер и скажи что пропс уже не сходятся и значит => РЕРЕНДЕР!!!!
        if (nextProps.value === 5) {
            return false;
        //иначе пропуск ререндера
        } else {
            return true;
        }
    }
);

