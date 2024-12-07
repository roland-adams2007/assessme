import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./assessme/Account";
import Course from "./assessme/Course";
import Questions from "./assessme/Questions";
import Score from "./assessme/Score";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./assessme/Auth";
import NotFound from "./assessme/NotFound";
 // Import the NotFound component

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/account" element={<Account />} />
          <Route
            path="*"
            element={
              <Auth>
                <Routes>
                  <Route path="/courses" element={<Course />} />
                  <Route path="/score" element={<Score />} />
                  <Route path="/" element={<Questions />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Auth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
