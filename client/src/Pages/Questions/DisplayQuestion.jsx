import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import QuestionsDetails from "./QuestionsDetails";

const DisplayQuestion = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-8">
              <QuestionsDetails />
            </div>
            <div className="col-md-4">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayQuestion;
