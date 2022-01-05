import logo from './Logo.png';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ServerBanner from './images/Banners/ubuntu-server-desktop-post.png'

const ImageURL = "https://www.reddit.com/r/wallpaper/comments/ru04re/dark_blue_mountains_3840x2160/"

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
    <header class='box font'>

        <h2>Projects</h2>
          <p>Coming Soon</p>
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
      <h1>404 Error</h1>
      <h3>An unexpected error has happend.</h3>
      <h5> Error: 404 </h5>
      <nav>
        <Link to="/" class="link">Home</Link>
      </nav>
      </div>
      </header>

    </>
  );
}

export default App;
