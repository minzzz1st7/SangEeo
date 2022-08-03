// 리액트
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// 페이지
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RegisterCounselorPage from './pages/RegisterCounselorPage';
import CounListPage from './pages/CounListPage';
import CounDetailPage from './pages/CounDetailPage';
import UserMyPage from './pages/UserMyPage'
// 컴포넌트
import NavigationBar from './components/header/Navbar';

// CSS
import './App.css';
//import styles from './app.module.css';


function App({authService}) {
  return (
    <div >
      <BrowserRouter>
        <NavigationBar authService={authService}/>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          
        
        {/* 상담사 경로 */}
          <Route path="/counselordetail/:id" element = {<CounDetailPage/>}/>
          <Route path="/counselorlist" element = {<CounListPage authService={authService}/>}/>
        
        
         {/* 회원관리 경로 */}
          <Route path="/sign_in" element={<LoginPage authService={authService}/>} />
          <Route path="/sign_up" element={<RegisterPage />} />
          <Route path="/sign_up/counselor" element={<RegisterCounselorPage />} />
          <Route path="/mypage/:id" element={<UserMyPage authService={authService}/>} />

       
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;