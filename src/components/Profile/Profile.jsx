import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
      <img className='profile_img' src='https://th.bing.com/th/id/OIP.-33GfPL47prhjycT9CsB3gHaE8?pid=ImgDet&rs=1'/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;