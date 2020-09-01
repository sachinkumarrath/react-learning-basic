import React, { useState } from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(() => {
    console.log('rendered in initial load');
    return 0;
  });
  const routerHistory = useHistory()
  const routerLocation = useLocation()
  const routeMatch = useRouteMatch()
  const routeParams = useParams()

  console.log('router props from hooks', routerHistory, routerLocation, routeMatch, routeParams)

  const incrementCounter = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return <button onClick={incrementCounter}>Count {count}</button>;
};

export default Counter;
