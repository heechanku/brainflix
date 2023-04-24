import "./App.scss";
import Header from "./components/Header/Header";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
