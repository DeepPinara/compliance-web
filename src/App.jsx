import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import CreateApplicationForm from './Components/CreateApplicationForm';
import DocForValidate from './Components/DocForValidate';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path='create-new-application-tracker' Component={CreateApplicationForm} />
          <Route path='doc-for-validate' Component={DocForValidate} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
