import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <>
      <div className="todoApp">
        <Header />
        <div>
          <Menu />
          <Container />
        </div>
      </div>
    </>
  );
}

export default App;
