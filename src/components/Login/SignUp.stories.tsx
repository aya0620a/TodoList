import SignUp from "./SignUp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default {
  title: "Login/SignUp",
  component: SignUp,
};

export const SignUpForm = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<SignUp />} />
        </Routes>
        </Router>
    );
}