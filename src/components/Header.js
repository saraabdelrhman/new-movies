import logo from './logo.png'; // Adjust the path accordingly
import '../styles.css';
  //export it means i will use it for another folder
export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="movieducks" />
      <p>Lights, Camera, Action – Start Watching Now and Get Hooked!</p>
    </div>
  );
}
