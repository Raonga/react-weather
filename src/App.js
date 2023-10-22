import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <Weather defaultCity="Windhoek" />
          </div>
        </div>

        <footer className="d-flex justify-content-center">
          <p>
            <a href="https://github.com/Raonga/react-weather">
              {" "}
              open-sourced code{" "}
            </a>{" "}
            by Raonga Uanivi
          </p>
        </footer>
      </div>
    </div>
  );
}
