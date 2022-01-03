import './App.css';
import Navbar from './components/Navbar';
import RequestProject from './components/RequestProject';
import Carousel from './components/Carousel';
import Aboutus from './components/Aboutus';
import Sponsors from './components/Sponsors';
import Achievement from './components/Achievement';
import Footer from './components/Footer';
import Doubts from './components/Doubts';
import Teams from './components/Teams';
import Batches from './components/Batches';
import Project from './components/Projects';
import Gallery from './components/Gallery';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
          <Route path="/TeamAviatorsInternational" component={Navbar}/>
          <Route path="/TeamAviatorsInternational" exact component={Carousel} />
          <Route path="/TeamAviatorsInternational" exact component={Aboutus} />
          <Route path="/TeamAviatorsInternational" exact component={Sponsors} />
          <Route path="/TeamAviatorsInternational" exact component={Achievement} />
          <Route path="/TeamAviatorsInternational" component={RequestProject} />
          <Route path="/TeamAviatorsInternational" component={Doubts} />
          {/* <Route path="/team" component={Navbar} element={<Navbar highlight="btn-ylw"/>}/> */}
          <Route path="/TeamAviatorsInternational/team" component={Teams} />
          <Route path="/TeamAviatorsInternational/team" component={Batches} />
          <Route path="/TeamAviatorsInternational/project" component={Project} />
          <Route path="/TeamAviatorsInternational/gallery" component={Gallery} />
          <Route path="/TeamAviatorsInternational" component={Footer} />
      </Router>
    </>
  );
}

export default App;
