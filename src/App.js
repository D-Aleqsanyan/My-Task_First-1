import {Route, Routes, useNavigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home/home";
import Form from "./pages/MyProfile/form";
import {useEffect} from "react";
import {AuthLayout} from "./layouts/AuthLayout/AuthLayouth";

function App() {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')


  useEffect(() => {
    if(!user){
      navigate('/home')
    }else{
      navigate('/')
    }
  }, [user]);

  return (
      <Routes>
        <Route path={''} element={<MainLayout/>}>
          <Route path={'/home'} element={<Home/>}/>
          <Route path={'/form'} element={<Form/>}/>
        </Route>
        <Route path={'/login'} element={<AuthLayout/>}></Route>
      </Routes>
  );
}

export default App;
