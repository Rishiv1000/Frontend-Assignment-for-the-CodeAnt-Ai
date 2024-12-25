import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logup from './pages/Logup.jsx';
import Task from "./pages/Task.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logup />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
  );
}
