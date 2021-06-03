import ReactDOM from "react-dom";
import Pet from './Pet';


const App = () => {
    return (
        <div>
            <h1>Adopt me!</h1>
            <Pet name="Luna" animal="Dog" breed="Fool" />
            <Pet name="Muna" animal="Dog" breed="Gool" />
            <Pet name="Nuna" animal="Dog" breed="Hool" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
