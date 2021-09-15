import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <Route path='/' component={HomeScreen} exact />

        </Router>
    );
}

export default App;
