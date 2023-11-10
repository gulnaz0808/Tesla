import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return ( 
    <div>
        My post
        <div>
          <textarea></textarea>
          <button>Add post</button>
          </div>
          <div className={s.posts}>
            <Post message='Hey! It is GiGi' likesCount='95' />
            <Post message='This is my Tesla' />
      </div>
      </div>
  );
}

export default MyPosts;