import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { data } from "./helper/data";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main data={data} />
    </div>
  );
}

export default App;
