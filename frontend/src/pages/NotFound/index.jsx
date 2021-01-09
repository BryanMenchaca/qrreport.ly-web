import React, { useEffect } from "react";
import "./notfound.css";

const Index = ({ history }) => {
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
        <button className="go-back-btn" onClick={() => history.goBack()}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Index;
