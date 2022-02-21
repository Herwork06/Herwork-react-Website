import logo from './Logo.png';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ServerBanner from './images/Banners/ubuntu-server-desktop-post.png'
import VoltLogo from './images/VoltBot.jpg'
import PootOSlogo from './images/PootOSLogo.png'
import TwitterIcon from './images/icons8-twitter-480.png'
import TwitchIcon from './images/icons8-twitch-480.png'
import YTIcon from './images/icons8-youtube-480.png'
import DiscordIcon from './images/icons8-discord-new-480.png'
import ProjectIcon from './images/icons8-folder-480.png'
const ImageURL = "images/WebBackground.png"

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
        

      <div class="box center font">
      
    <img src={logo} alt="Profile Picture" class="PFP"></img>

    <h1>Herwork06</h1>
    <p>Hi! I am Herwork06.
    <br></br>
    | Leader of VoltBot!
    <br></br>
    | Developer at <a href="https://twitter.com/kritzkast" target="_blank" rel="noreferrer" class='link'>KritzKast</a>
    <br></br>
    | Linxus Server Developer
    </p>
    <p>Links: </p>
        
    <Link class='link' to="/project"><button class='NormalButton'><img src={ProjectIcon} alt='Twitter Logo'></img><span class="MenuSpan">Projects</span></button></Link> <br></br>
    <br></br>
    <Link class='link' to="/404"><button class='NormalButton'><img src={DiscordIcon} alt='Twitter Logo'></img><span class="MenuSpan">Discord</span></button></Link> <br></br>
    <br></br>
    <a href='https://twitter.com/Herwork06' target="_blank" rel="noreferrer"><button class='NormalButton'><img src={TwitterIcon} alt='Twitter Logo'></img><span class="MenuSpan">Twitter</span></button> </a>    <br></br>
    <br></br>
    <a href='https://www.twitch.tv/herwork06' target="_blank" rel="noreferrer"><button class='NormalButton'><img src={TwitchIcon} alt='Twitter Logo'></img><span class="MenuSpan">Twitch</span></button> </a>    <br></br>
    <br></br>
    <a href='https://www.youtube.com/channel/UC6cs1e1HpujA4yNGAdUYfMg' target="_blank" rel="noreferrer"><button class='NormalButton'><img src={YTIcon} alt='Twitter Logo'></img><span class="MenuSpan">YouTube</span></button> </a>    <br></br>



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
        <Link class='link' to="/project/voltbot"><button class='NormalButton'><span>VoltBot</span></button></Link> <br></br>
        <br></br>
        <Link class='link' to="/project/pootos"><button class='NormalButton'><span>PootOS</span></button></Link> <br></br>
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
            Beacuse I really don't want to pay for VPN or a Server Hosting provider. If I can host it by myself I will host it by myself
            <br></br>
            <br></br>
            My hosting list:
            <br></br>
            KritzKraft SMP
            Join the server at their Discord Server!
            <br></br>
            EU Pre-Fortress 2
            Download PF2 and join the server via: eu.prefortress.com
            <br></br>
            <br></br>
            Discord Bots:
            <br></br>
            VoltBot
            <br></br>
            MattBot
            <br></br>
            ImpBot
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
