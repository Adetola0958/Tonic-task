import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import RealPage from "./Pages/RealPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RealPage/>} exact/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
