import { useState, useEffect } from "react";

function WindowSizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
      console.log("Unsubscribed from resize event");
    };
  }, []);

  return (
    <div>
      <h1>Window Width</h1>
      <p>Current Width : {width}px </p>
    </div>
  );
}

export default WindowSizeTracker;
