import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import InvoiceScreen from "./screens/InvoiceScreen";

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/invoice/:id' component={InvoiceScreen} exact />
        </Router>
    );
}

export default App;
