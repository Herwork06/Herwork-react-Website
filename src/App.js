import logo from './Logo.png';
import './App.css';

const ImageURL = "https://preview.redd.it/vezrf8qmcf981.jpg?width=960&crop=smart&auto=webp&s=8e93f516586da077ae23712621ef9fe7028de193"

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        
       
      <div class="box">
      <div class="center font">
      
    <img src={logo} alt="Profile Picture" class="PFP"></img>

    <h1>Herwork06</h1>
    <p>Hi! I am Herwork06 a coder, 3D artist and linux server developer who lives in Norway 🇳🇴 </p>
    <p>Links: </p>
    <a href="404.html" class='link'>Projects</a>
    <br></br>
    <a href="404.html" target="_blank" rel="noreferrer" class='link'>Discord</a>
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
  );
}

export default App;
