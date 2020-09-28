import React from "react";

const GruposLoadingSkeleton = () => {
  return [1, 2, 3, 4, 5, 6, 7].map((value) => {
    return (
      <div className="col-md-3 mt-4 text-center" key={value}>
        <div className="box text-center">
          <h4 className="anim" style={{ margin: "0px 60px", color: "#F4F4F4" }}>
            -
          </h4>
          <h6
            className="anim"
            style={{ margin: "10px 20px", color: "#F4F4F4", marginTop: 20 }}
          >
            -
          </h6>
          <h6
            className="anim"
            style={{ margin: "10px 30px", color: "#F4F4F4", marginTop: 20 }}
          >
            -
          </h6>
        </div>
      </div>
    );
  });
};

export default GruposLoadingSkeleton;
