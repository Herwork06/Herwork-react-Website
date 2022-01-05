import logo from './Logo.png';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

const ImageURL = "https://preview.redd.it/vezrf8qmcf981.jpg?width=960&crop=smart&auto=webp&s=8e93f516586da077ae23712621ef9fe7028de193"

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        
       
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/404" element={<NoWeb />} />
    </Routes>
    </header>
</div>

      
  );
}
function Home() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        
       
      <div class="box">
      <div class="center font">
      
    <img src={logo} alt="Profile Picture" class="PFP"></img>

    <h1>Herwork06</h1>
    <p>Hi! I am Herwork06 a coder, 3D artist and linux server developer who lives in Norway 🇳🇴 </p>
    <p>Links: </p>
        
    <Link to="/project">Projects</Link>
    <br></br>
    <Link to="/404">Discord</Link>
    <br></br>
    <a href="https://twitter.com/Herwork06" target="_blank" rel="noreferrer" class='link'>Twitter</a>
    <br></br>
    <a href="https://www.twitch.tv/herwork06" target="_blank" rel="noreferrer" class='link'>Twitch</a>
    <br></br>
    <a href="https://www.youtube.com/channel/UC6cs1e1HpujA4yNGAdUYfMg" target="_blank" rel="noreferrer" class='link'>YouTube</a>

    </div>

</div>

      </header>
      <footer class='font'>
        <a href={ImageURL} target="_blank" rel="noreferrer" class='link'>Image Source</a>
    </footer>
    </div>
    </>
  );
}

function Project() {
  return (
    <>
    <header class='box'>

        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      </header>
    </>
  );
}
function NoWeb() {
  return (
    <>
    <header class='web404'>
          <div class='font'>
      <h1>:(</h1>
      <h1>Wrong Site</h1>
      <nav>
        <Link to="/" class="link">Home</Link>
      </nav>
      </div>
      </header>

    </>
  );
}

export default App;
