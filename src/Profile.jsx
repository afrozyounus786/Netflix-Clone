import React from 'react';
import "./Profile.css";
import Navbar from './Components/Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from './Slice/UserSlice';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className='profile'>
      <Navbar />
      <div className="profile-body">
        <h1>Edit Profile</h1>
        <div className="profile-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profile-details">
            <h2>{user?.email || "User email not available"}</h2>
            <div className="profile-plan">
                <h3>Plans</h3>
              <button
                onClick={handleSignOut}
                className='profile-signout'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
