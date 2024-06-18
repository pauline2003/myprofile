import React from 'react';
import './App.css';
import ProfileCard from './componets/Profilecard';

const App = () => {
  const profiles = [
    {
      name: "Alice Johnson",
      age: 27,
      profilePicture: "https://robohash.org/AliceJohnson",
      bio: "UX designer from Canada. Loves painting and traveling.",
    },
    {
      name: "Michael Smith",
      age: 32,
      profilePicture: "https://robohash.org/MichaelSmith",
      bio: "Data scientist from Germany. Enjoys chess and data visualization.",
    },
    {
      name: "Sofia Martinez",
      age: 29,
      profilePicture: "https://robohash.org/SofiaMartinez",
      bio: "Mobile app developer from Brazil. Plays guitar and hikes.",
    },
  ];  
  

  return (
    <div>
      <h1>Profile Cards</h1>
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