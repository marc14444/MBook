import {Navbar} from 'components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import s from "./style.module.css"
export function App() {
  return (
    <div className="App">
      <Navbar />
      <div className={s.outlet_container}><Outlet/></div>
    </div>
  );
}