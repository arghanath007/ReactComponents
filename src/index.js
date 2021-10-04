<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const currentDate = () => {
  return new Date().getDate();
};

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        date={currentDate()}
        imgUrl={faker.image.avatar()}
        authorName={faker.name.findName()}
        text={faker.lorem.lines()}
      />
      <CommentDetail
        date={currentDate()}
        imgUrl={faker.image.avatar()}
        authorName={faker.name.findName()}
        text={faker.lorem.lines()}
      />
      <CommentDetail
        date={currentDate()}
        imgUrl={faker.image.avatar()}
        authorName={faker.name.findName()}
        text={faker.lorem.lines()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
=======
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const currentDate = () => {
  return new Date().getDate();
};

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        date={currentDate()}
        imgUrl={faker.image.avatar()}
        authorName={faker.name.findName()}
        text={faker.lorem.lines()}
      />
      <CommentDetail
        date={currentDate()}
        imgUrl={faker.image.avatar()}
        authorName={faker.name.findName()}
        text={faker.lorem.lines()}
      />
      <CommentDetail
        date={currentDate()}
        imgUrl={faker.image.avatar()}
        authorName={faker.name.findName()}
        text={faker.lorem.lines()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
>>>>>>> 53716258ba7af41253d2165fc7ca9ca2c3fd4875
