import React, { useState, useCallback, useMemo, useEffect } from "react";

export const Component = (props) => {
  console.log("----------, component is rendering");
  const [messageList, setMessageList] = useState([]);
  const [count, setCount] = useState(1);
  const [names, setNames] = useState([
    { first: "Me" },
    { first: "Alex" },
    { first: "Michael" },
  ]);

  useEffect(() => {
    console.log("did mount");
  }, []);

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {

      const robotMess = { author: 'Robot', text: 'hello'};
      setMessageList([...messageList, robotMess]);
    }
  }, [messageList]);

  const handleClick = useCallback(() => {
    const newMessage = {author: "Ilya", text: 'Hi'};

    setMessageList([...messageList, newMessage]);
  }, [messageList]);

  return (
    <>
      <span>Hello there, {count}</span>
      <button onClick={handleClick}>ADD NAME</button>
      {messageList.map((mess) => (
        <div>{mess.author}</div>
      ))}
    </>
  );
};

const Header = <header>MyHeader</header>

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    // console.log('-------, constructor');

    this.state = {
      count: 1,
      number: 10,
      name: "Me",
    };
  }

  componentDidMount() {
    // console.log('---------, did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    // console.log(prevProps, prevState);
    // console.log('---------, did update');
  }

  componentWillUnmount() {
    // console.log('--------, willUnmount');
  }

  updateCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    // console.log('---------, render');
    return (
      <div>
        {Header}
        <span>Hello there, {this.state.count}</span>
        <button onClick={this.updateCount}>INCREASE</button>
        <div>
          Hello there, {this.state.name} {this.state.number}
        </div>
      </div>
    );
  }
}
