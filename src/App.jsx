import NavBar from "./components/navbar/NavBar.jsx";
import { Routes, Route } from 'react-router-dom';
import "./index.css";
import HomePage from './pages/HomePage.jsx';
import SmsPage from "./pages/SmsPage.jsx";
import PdfPage from './pages/PdfPage.jsx';
import InfoPage from './pages/InfoPage.jsx';
import MenuPage from './pages/MenuPage.jsx';



function App() {
	return (
		<>
			<NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/sms' element={<SmsPage/>} />
        <Route path='/pdf' element={<PdfPage/>} />
        <Route path='/info' element={<InfoPage/>} />
        <Route path='/menu' element={<MenuPage/>} />
      </Routes>

      {/* <>home</>cls
      <>sms</>
      <>pdf</>
      <>info</>
      <>menu</> */}

		</>
	);
}

export default App;
