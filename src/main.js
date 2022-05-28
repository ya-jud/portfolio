import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';
import Test from './test.jsx';

const container = document.getElementById('app');
const root = createRoot(container);
const history = createHashHistory({queryKey: false});

// const test = () => <h1>TEST</h1>;

root.render(
    <Router history={history} >
        <Test /> 
        {/* И ПРОСТО НАХУЙ СЮДА ВСТАВИТЬ */}
    </Router>
);



// ReactDOM.render(
//     <Router history={history}>
//       <Route path="/" component={AppRoute}>
//         <IndexRoute component={Tasks}/>
//         <Route path="/tasks(/:type)" component={Tasks} />
//         <Route path="/task/:id" component={Task} />
//       </Route>
//     </Router>,
//     document.getElementById('app')
//   );

// ReactDOM.render((
//     <h1>TEST</h1>
// ), document.getElementById('app'))