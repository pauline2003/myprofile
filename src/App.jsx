import React from 'react';
import './App.css';
import ProfileCard from './componets/Profilecard';

const App = () => {
  const profiles = [
    {
      name: "Alice Johnson",
      age: 27,
      profilePicture: "https://i.pravatar.cc/150?img=32",
      bio: "UX designer from Canada. Loves painting and traveling.",
    },
    {
      name: "Michael Smith",
      age: 32,
      profilePicture: "https://i.pravatar.cc/150?img=12",
      bio: "Data scientist from Germany. Enjoys chess and data visualization.",
    },
    {
      name: "Sofia Martinez",
      age: 29,
      profilePicture: "https://i.pravatar.cc/150?img=44",
      bio: "Mobile app developer from Brazil. Plays guitar and hikes.",
    },
  ];  
  

  return (
    <div>
      <h1>Profile Samples</h1>
      <div className="profile-cards-container">
        {profiles.map((profile, index) => (
          <ProfileCard 
            key={index}
            name={profile.name}
            age={profile.age}
            profilePicture={profile.profilePicture}
            bio={profile.bio}
          />
        ))}
      </div> 
    </div>
  );
};

export default App;