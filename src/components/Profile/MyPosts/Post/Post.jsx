import React from 'react';
import s from './Post.module.css';

const Post = (props) => { 

  return ( 
          <div className={s.item}>
            <img src='https://th.bing.com/th/id/OIP.lAq2NpFJHcFmLDipeRJXEwHaE8?pid=ImgDet&rs=1' />
            {props.message}
            <div>
            <span>Like</span>
            {props.likesCount}
            </div>
          </div>
  );
}

export default Post;