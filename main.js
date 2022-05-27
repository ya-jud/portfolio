import { createRoot } from 'react-dom/client';
import React from 'react';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<h1>TEST</h1>);

// ReactDOM.render((
//     <h1>TEST</h1>
// ), document.getElementById('app'))