
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import SearchResult from "./Components/SearchResult/SearchResult";

function App() {
  const data = [
    { first_name: "Amit", last_name: "Sharma", city: "Mumbai", contact_number: "9876543210" },
    { first_name: "Amit", last_name: "Verma", city: "Delhi", contact_number: "9123456789" },
    { first_name: "Sandeep", last_name: "Gupta", city: "Bangalore", contact_number: "9876549870" },
];
  return (
    <div className="bg-gradient-to-b from-white to-[#B1CBFF]">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search/:query" element={<SearchResult data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
