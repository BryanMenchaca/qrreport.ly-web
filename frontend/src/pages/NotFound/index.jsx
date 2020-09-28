import React, { useEffect } from "react";
import "./notfound.css";

const Index = () => {
  useEffect(() => {
    document.title = "Oops! - 404";
  }, []);

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <a href="/login">Go Back</a>
      </div>
    </div>
  );
};

export default Index;
