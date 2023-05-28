import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AboutMe from './pages/AboueMe';

function Navbar() {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#login" className="right-align">Login</a>
    </div>
  );
}

function Home() {
  return (
    <div className="frame" id="home">
      <img src={process.env.PUBLIC_URL + '/picture/Profile.png'} id="picture_frame" style={{ width: '15%', height: '5%' }} />
      <h3>Blog post 1#</h3>
      <p>My <b>first blog post</b> is all about me, and how to<br /> write a new post in my blog.
        <br />
        <br />
        <br />Publlished 1 day ago by Israel
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="frame" id="about">
      <img src={process.env.PUBLIC_URL + '/picture/aboutme.jpg'} id="picture_frame" style={{ width: '15%', height: '5%' }} />
      <h3>Blog post 2#</h3>
      <p>My <b>second blog post</b> is all about my blog post.
        <br />
        <br />
        <br />Publlished 2 day ago by Joe
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="frame" id="contact">
      <img src={process.env.PUBLIC_URL + '/picture/contact.jpg'} id="picture_frame" style={{ width: '15%', height: '5%' }} />
      <h3>Blog post 3#</h3>
      <p>My <b>Third blog post</b> is all about me, and how to write a new post in my blog.
        <br />
        <br />
        <br />Publlished 3 day ago by Israel
      </p>
    </div>
  );
}

function SideBar() {
  return (
    <div className="right">
      <h1>Latest</h1>
      <h3>Blog post 1# <a href="#home">Go to page</a></h3>
      <h3>Blog post 2# <a href="#about">Go to page</a></h3>
      <h3>Blog post 3# <a href="#contact">Go to page</a></h3>
      <p>________________________</p>
      <h1>Popular</h1>
      <h3>Blog post 3# <a href="#contact">Go to page</a></h3>
      <h3>Blog post 1# <a href="#home">Go to page</a></h3>
      <h3>Blog post 2# <a href="#about">Go to page</a></h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <Home/>
      <Navbar />
      <h1>This is My blog</h1>
      <Home />
      <br />
      <About />
      <br />
      <Contact />
      <br />
      <SideBar/>
    </div>
  );
}



export default App;
