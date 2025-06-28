import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout}>
      
        </Route>
      </Routes>
    </Router>
  )
}

export default App
