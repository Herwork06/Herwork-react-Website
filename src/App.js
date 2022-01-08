import logo from './Logo.png';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ServerBanner from './images/Banners/ubuntu-server-desktop-post.png'
import VoltLogo from './images/VoltBot.jpg'
import PootOSlogo from './images/PootOSLogo.png'

const ImageURL = "https://www.reddit.com/r/wallpapers/comments/821d9u/star_wars_1980x1080/"

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        
       
  
    <Routes>
      <Route class='link' path="/" element={<Home />} />
      <Route class='link' path="/project" element={<Project />} />
      <Route class='link' path="/project/voltbot" element={<Voltbot />} />
      <Route class='link' path="/project/pootos" element={<PootOS />} />
      <Route class='link' path="/404" element={<NoWeb />} />
    </Routes>
    <footer class='font'>
        <a href={ImageURL} target="_blank" rel="noreferrer" class='link'>Image Source</a>
    </footer>
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
        
    <Link class='link' to="/project">Projects</Link>
    <br></br>
    <Link class='link' to="/404">Discord</Link>
    <br></br>
    <a href="https://twitter.com/Herwork06" target="_blank" rel="noreferrer" class='link'>Twitter</a>
    <br></br>
    <a href="https://www.twitch.tv/herwork06" target="_blank" rel="noreferrer" class='link'>Twitch</a>
    <br></br>
    <a href="https://www.youtube.com/channel/UC6cs1e1HpujA4yNGAdUYfMg" target="_blank" rel="noreferrer" class='link'>YouTube</a>

    </div>

</div>

      </header>

    </div>
    </>
  );
}

function Project() {
  return (
    <>
    <header class='box font'>

        <h2>Projects</h2>
        <Link class='link' to="/project/voltbot">VoltBot</Link>
        <br></br>
        <Link class='link' to="/project/pootos">PootOS Server</Link>
          <p>More is coming soon
          </p>
      <nav>
        <Link class='link' to="/">Home</Link>
      </nav>
      </header>
    </>
  );
}
function Voltbot() {
  return (
    <>
    <header class='box font'>

        <h2>VoltBot</h2>
        <img src={VoltLogo} alt='VoltBot Logo' class='VoltLogo'></img>
          <p>
            VoltBot! <br></br>
            VoltBot is a free and public Discord Bot for everyone to use :D <br></br>
            Check more info at the website!
          </p>
          <a href='https://voltbot.herwork.xyz' target="_blank" rel="noreferrer"><button class='VoltButton'><span>VoltBot Website </span></button> </a>
      <nav>
        <Link class='link' to="/">Home</Link>
      </nav>
      </header>
    </>
  );
}
function PootOS() {
  return (
    <>
    <header class='box font'>

        <h2>Linux Server (PootOS)</h2>
        <img src={PootOSlogo} alt='PootOS Logo' class='PootLogo'></img>
          <p>
            PootOS my hosting server <br></br>
            I have made myself a modified version of ubuntu server for game hosting and bot hosting.
            <br></br>
            <br></br>
            But why did i make a server?
            <br></br>
            Beacuse I really don't want to pay for VPN or a Server Hosint provider. If I can host it by myself I will host it by myself
            <br></br>
            <br></br>
            Who is using my server:
            <br></br>
            <br></br>
            I am hosting 2 game server Minecraft and TF2 for <a href="https://twitter.com/kritzkast" target="_blank" rel="noreferrer" class='link'>KritzKast</a>. Join thiers game servers today!
            <br></br>
            I am hosting 2 Discord bots for ItsDefinitelyMatt and SonixTheLux!
            <br></br>
            VoltBot is running on the server too.
          </p>
      <nav>
        <Link class='link' to="/">Home</Link>
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
      <h1>404</h1>
      <h3>An unexpected error has happend.</h3>
      <h5> Error: 404 </h5>
      <nav>
        <Link class='link' to="/" class="link">Home</Link>
      </nav>
      </div>
      </header>

    </>
  );
}

export default App;
