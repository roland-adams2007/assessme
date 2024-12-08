import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./assessme/Account";
import Course from "./assessme/Course";
import Questions from "./assessme/Questions";
import Score from "./assessme/Score";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./assessme/Auth";
import NotFound from "./assessme/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/account" element={<Account />} />

          {/* Protected Routes, wrapped with Auth */}
          <Route element={<Auth />}>
            <Route path="/courses" element={<Course />} />
            <Route path="/score" element={<Score />} />
            <Route path="/" element={<Questions />} />
          </Route>

          {/* Fallback Route for unmatched paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
