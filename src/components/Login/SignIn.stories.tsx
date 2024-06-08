import Login from "./SignIn";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default {
    title: "Login",
    component: Login,
};

export const SignIn = () => {
    return (
        <Router>
        <Routes>
            <SignIn />
        </Routes>
        </Router>
    );
}