import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";

function App() {
  return (
    <>
      <Navbar />
      <div className="container pt-4">
        <Grid />
      </div>
    </>
  );
}

export default App;
