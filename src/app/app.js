import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react'
import Hook from './Hook';

function app() {
  return (
    <Router>
        <Hook/>
    </Router>
  )
}

export default app