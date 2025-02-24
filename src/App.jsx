import { useState } from "react";
import "./App.css";

function App() {
    let [result, setResult] = useState(0);

    if (result === "") {
        setResult((result = 0));
    }

    const showValueInResult = (e) => {
        const value = e.target.value;
        const operators = ["+", "-", "*", "/", "%"];

        if (
            operators.includes(result.toString().slice(-1)) &&
            operators.includes(value)
        ) {
            return;
        }

        if (value === ".") {
            const parts = result.toString().split(/[\+\-\*/%]/);
            const lastNumber = parts[parts.length - 1];

            if (lastNumber.includes(".")) {
                return;
            }
        }

        if (result === 0) {
            setResult(value);
        } else {
            setResult(result + value);
        }
    };

    const setResultToZero = (e) => {
        setResult((result = 0));
    };

    const removeLastNumber = (e) => {
        if (result === 0) {
            return;
        } else {
            setResult(result.slice(0, -1));
        }
    };

    const calculateResult = (e) => {
        if (result.includes("/0")) {
            setResult((result = "Undefined"));
            return;
        }

        if (result.includes("%")) {
            let expression = result.toString();
            expression = expression.replace(
                /(\d+(\.\d+)?)\s*([\+\-\*/])\s*(\d+(\.\d+)?)%/g,
                (match, num1, _, operator, num2) => {
                    let base = parseFloat(num1);
                    let percentage = parseFloat(num2) / 100;

                    if (operator === "+" || operator === "-") {
                        return `${base} ${operator} (${base} * ${percentage})`;
                    } else if (operator === "*") {
                        return `${base} * ${percentage}`;
                    } else if (operator === "/") {
                        return `${base} / ${percentage}`;
                    }
                }
            );

            setResult(eval(expression));
        } else {
            setResult((result = eval(result)));
        }
    };

    return (
        <div className="container">
            <div className="calculator">
                <form action="#">
                    <div className="result">
                        <input type="text" value={result} readOnly />
                    </div>
                    <div className="buttons">
                        <div className="row">
                            <input
                                type="button"
                                value="C"
                                onClick={setResultToZero}
                            />
                            <button onClick={removeLastNumber}>
                                <i className="fa-solid fa-delete-left"></i>
                            </button>
                            <input
                                type="button"
                                value="%"
                                onClick={showValueInResult}
                            />
                            <input
                                type="button"
                                value="/"
                                onClick={showValueInResult}
                            />
                        </div>
                        <div className="row">
                            <input
                                type="button"
                                value="7"
                                onClick={showValueInResult}
                            />
                            <input
                                type="button"
                                value="8"
                                onClick={showValueInResult}
                            />
                            <input
                                type="button"
                                value="9"
                                onClick={showValueInResult}
                            />
                            <input
                                type="button"
                                value="*"
                                onClick={showValueInResult}
                            />
                        </div>
                        <div className="row">
                            <input
                                type="button"
                                value="4"
                                onClick={showValueInResult}
                            />
                            <input
                                type="button"
                                value="5"
                                onClick={showValueInResult}
                            />
                            <input
                                type="button"
                                value="6"
                                onClick={showValueInResult}
                            />
                            <input
                                type="button"
                                value="-"
                                onClick={showValueInResult}
                            />
                        </div>
                        <div className="row">
                            <input
                                type="button"
                                value="1"
                                onClick={showValueInResult}
                            />
                            <input
                                type="button"
                                value="2"
                                onClick={showValueInResult}
                            />
                            <input
                                type="button"
                                value="3"
                                onClick={showValueInResult}
                            />
                            <input
                                type="button"
                                value="+"
                                onClick={showValueInResult}
                            />
                        </div>
                        <div className="row">
                            <input
                                type="button"
                                value="0"
                                onClick={showValueInResult}
                            />
                            <input
                                type="button"
                                value="."
                                onClick={showValueInResult}
                            />
                            <input
                                className="equal"
                                type="button"
                                value="="
                                onClick={calculateResult}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
