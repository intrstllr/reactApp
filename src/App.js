import "./css/App.css";
import { useState } from "react";

function App() {
    let [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter + 1);
    }
    function deleteCount() {
        setCounter((counter = 0));
    }
    return (
        <div className="App">
            <div className="counter_container my-5 ms-5 d-flex justify-content-evenly">
                <button class="btn btn-primary" type="button" onClick={increment}>
                    Прибавить
                </button>
                <button class="btn btn-danger" type="button" onClick={deleteCount}>
                    Удалить
                </button>
                <div class="fs-2 ms-5"> {counter}</div>
            </div>
        </div>
    );
}

export default App;
