import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import CreateApplicationForm from './Components/CreateApplicationForm';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path='create-new-application-tracker' Component={CreateApplicationForm} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
