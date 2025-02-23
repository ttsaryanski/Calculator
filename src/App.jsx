import { useState } from "react";
import "./App.css";

function App() {
    let [result, setResult] = useState(0);

    if (result === "") {
        setResult((result = 0));
    }

    const showValueInResult = (e) => {
        if (result === 0) {
            setResult((result = e.target.value));
        } else {
            setResult(result + e.target.value);
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
        if (result.includes("%")) {
            let expression = result.toString();
            let match = expression.match(/([\d.]+)([\+\-\*/])([\d.]+)%/);

            while (match) {
                let base = parseFloat(match[1]);
                let operator = match[2];
                let percentage = parseFloat(match[3]);
                let calculatedValue = (base * percentage) / 100;
                expression = expression.replace(
                    match[0],
                    `${base}${operator}${calculatedValue}`
                );
                match = expression.match(/([\d.]+)([\+\-\*/])([\d.]+)%/);
            }

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
                    <div className="buttons">
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
                    <div className="buttons">
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
                    <div className="buttons">
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
                    <div className="buttons">
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
                </form>
            </div>
        </div>
    );
}

export default App;
