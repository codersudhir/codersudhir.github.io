import './App.css';
import Nav from "./components/Nav"
import {ThemeContext} from "./context/ThemeContext";
import {useContext} from "react";
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import GitHubStats from './components/GitHubStats';

function App() {
const {isLight} = useContext(ThemeContext);
  return (
    <div className={`App${isLight?"light":"dark"}`}>
      <Nav/>
      <Header/>
      <Profile/>
      <Projects/>
      <GitHubStats/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
