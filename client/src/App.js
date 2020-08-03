import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

// importing pages
import Index from './pages/index'
import CreateQuiz from "./pages/create.quiz";

function App() {
    return (
        <div>

            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Index}/>
                    <Route exact path={'/create'} component={CreateQuiz}/>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
