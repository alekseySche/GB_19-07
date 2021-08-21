import React, { useState, useCallback } from "react";

class Button extends React.PureComponent {
  render() {
    console.log("button rendering");
    return <button onClick={this.props.onClick}>Update count</button>;
  }
}

const Counter = ({ value }) => {
  console.log("counter rendering");
  return <div>{value}</div>;
};

export const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <Counter value={count} />
      <Button onClick={handleClick} />
    </>
  );
};