<<<<<<< HEAD
import React from "react";

const CommentDetail = ({ imgUrl, authorName, date, text }) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={`${imgUrl}`} />
    </a>
    <div className="content">
      <a href="/" className="author">
        {authorName}
      </a>
      <div className="metadata">
        <span className="date">Today at {date}</span>
      </div>
      <div className="text">{text}</div>
    </div>
  </div>
);

export default CommentDetail;
=======
import React from "react";

const CommentDetail = ({ imgUrl, authorName, date, text }) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={`${imgUrl}`} />
    </a>
    <div className="content">
      <a href="/" className="author">
        {authorName}
      </a>
      <div className="metadata">
        <span className="date">Today at {date}</span>
      </div>
      <div className="text">{text}</div>
    </div>
  </div>
);

export default CommentDetail;
>>>>>>> 53716258ba7af41253d2165fc7ca9ca2c3fd4875
