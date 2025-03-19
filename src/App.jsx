import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeTable from "./EmployeeTable";
import Login from "./Login";
import Register from "./Register";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
   
    <Provider store={store}>
       <Router>
           <Routes>
          <Route path="/" element={<EmployeeTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
    </Router>
    </Provider>
  );
}

export default App;
