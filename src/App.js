import './App.css';
import Curriculum from './components/Curriculum/Curriculum';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import { datos } from './datos/datos'
import 'bootstrap-icons/font/bootstrap-icons.css';


const {section, curriculumSections } = datos;

function App() {
  return (
    <div className="App">
      <Section section={section}/>
      <Curriculum curriculumSections={curriculumSections}/>
      
      <Footer/>
    </div>
  );
}

export default App;
