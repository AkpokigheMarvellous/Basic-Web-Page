import React from 'react';
import Footer from './common/Footer';
import NameAndPhoto from './profile/NameAndPhoto';
import UserLinks from './profile/UserLinks';

const Profile = () => (
  <div className="p-10">
    <NameAndPhoto />
    <UserLinks />
    <Footer />
  </div>
);

export default Profile;