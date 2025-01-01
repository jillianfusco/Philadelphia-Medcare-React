import './App.css';
import './Mediaqueries.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Aboutus from './components/AboutUs';
import OurServices from './components/OurServices';

function App() {
  return (
    <div >
      <Navbar />
      <Profile />
      <Aboutus />
      <OurServices />
    </div>
  );
}

export default App;
