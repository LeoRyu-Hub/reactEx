import React,{useState} from "react";
import TempInput from "./TempInput";

function Boil(props){
    if (props.celsius >= 100){
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;

}

function toCelsius(fahrenheit){
    return ((fahrenheit-32)*5) / 9;
}

function toFahrenheit(celsius){
    return (celsius*9) / 5 + 32;
}

function tryConvert(temp, convert){
    const input = parseFloat(temp);
    if (Number.isNaN(input)){
        return "";
    }

const output = convert(input);
const rounded = Math.round(output * 1000) / 1000;
return rounded.toString();

}

function Cal(props) {
    const [temp, setTemp] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temp) =>{
        setTemp(temp);
        setScale("c");
    };

    const handleFahrenheitChange = (temp) =>{
        setTemp(temp);
        setScale("f");
    };

    const celsius = scale === "f" ? tryConvert(temp, toCelsius) : temp;
    const fahrenheit = scale === "c" ? tryConvert(temp, toFahrenheit) : temp;

    return (
        <div>

            <TempInput
                scale = "c"
                temp = {celsius}
                onTempChange = {handleCelsiusChange}
            />

            <TempInput
                scale = "f"
                temp = {fahrenheit}
                onTempChange = {handleFahrenheitChange}
            />
            <Boil celsius={parseFloat(celsius)} />
        </div>

    );
}

export default Cal;
