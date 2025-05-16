import React, { useEffect } from 'react'
import HomeScreen from './Components/HomeScreen'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from './Components/Login';
import { auth } from './firebase';
import { useDispatch , useSelector } from 'react-redux';
import { login, logout, selectUser } from './Slice/UserSlice.js';
import Profile from './Profile.jsx';


 
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);


  useEffect(() => {
   const unsubcribe = auth.onAuthStateChanged((userAuth) => {
    if(userAuth){
      dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email,
      }));
    }else{
      dispatch(logout());
      console.log("log out done");
    }
   })
   return unsubcribe;
  }, [dispatch]);
  
  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route
          path="/"
          element={user ? <HomeScreen /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App