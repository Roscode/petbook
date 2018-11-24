import React from 'react';
import Header from 'components/Header';

function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 border" align="center">
          <img alt="profile" className="pro-pic" src="https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/puppy-vomiting_canna-pet-1024x682.jpg" />
          <h1 className="user-name">Max</h1>
          <p className="user-loc">New York, NY</p>
          <a className="user-friends" href="#!">Friends</a>
        </div>
        <div className="col-8 border">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default Profile;