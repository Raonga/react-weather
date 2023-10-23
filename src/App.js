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
            Coded by Raonga Uanivi and is open-sourced on
            <a href="https://github.com/Raonga/react-weather"> github </a> and
            hosted on{" "}
            <a href="https://react-weather-rose-eight.vercel.app/">vercel</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
