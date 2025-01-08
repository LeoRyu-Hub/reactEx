import React from "react"

const scaleNames ={
    c : "섭씨",
    f : "화씨",
}

function TempInput(props){

    const handleChange = (event) => {
        props.onTempChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위 : {scaleNames[props.scale]}):
            </legend>
            <input value={props.temp} onChange={handleChange} />
        </fieldset>
   );
}

export default TempInput;

