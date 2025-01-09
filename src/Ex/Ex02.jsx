import React,{useCallback, useState} from "react";

function ParentComponent(){
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(c => c +1);
    },[]);

    return (
        <div>
            {count}
            <ChildComponent onClick = {handleClick} />
        </div>
    );
}


function ChildComponent( {onClick} ) {
    return(
        <button onClick={onClick}>Click me</button>
    );
}

export default ParentComponent;