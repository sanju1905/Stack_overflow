import React from "react";
import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";

const Questions = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-12">
          <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        </div>
        <div className="col-lg-9 col-12">
          <div className="row">
            <div className="col-md-8 col-12">
              <HomeMainbar />
            </div>
            <div className="col-md-4 col-12">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
