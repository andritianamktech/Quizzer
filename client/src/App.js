import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

// importing pages
import Index from './pages/index'
import CreateQuiz from "./pages/create.quiz";

// importing custom components
import Navbar from "./components/navbar";

function App() {
    return (
        <div>

            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} >
                        <Navbar />
                        <Index/>
                    </Route>
                    <Route exact path={'/create'} component={CreateQuiz}/>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
