import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button.jsx'
import MyComponent from './MyComponent.jsx'
import Object from "./Array_Object.jsx";
import {Array} from "./Array_Object.jsx";
import {ArrayOfObjects} from "./Array_Object.jsx";

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
                <main>
                    <h1>Vite + React</h1>
                    <div className="logo-container">
                        <img src={viteLogo} className="logo vite" alt="Vite logo" />
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </div>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                    <Button />
                    <div>
                        <MyComponent />
                    </div>
                    <div>
                        <Object/>
                    </div>
                    <div>
                        <Array/>
                    </div>
                    <div>
                        <ArrayOfObjects/>
                    </div>
                </main>
        </div>
    )
}

export default App


