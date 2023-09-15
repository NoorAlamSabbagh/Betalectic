import { Route, Routes } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import MainContainer from "./components/MainContainer";
import AddFavsContainer from "./components/AddFavsContainer";
// import { AddFavsContainer, Headers, MainContainer } from "./components";


function App() {
  return (
    <>
      <Headers />

      <Routes>
        <Route path="/*" element={<MainContainer />} />
        <Route path="/addFavs" element={<AddFavsContainer />} />
      </Routes>
    </>
  );
}

export default App;
