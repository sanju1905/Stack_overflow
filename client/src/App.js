import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
// const path = require('path');

// app.use("/audio", express.static(path.join(__dirname, "audio")));

// app.use("/video", express.static(__dirname + "/video"));
// app.use("/photo", express.static(__dirname + "/photo"));


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleSlideIn={handleSlideIn} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
  );
}

export default App;
