import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import "./Tags.css";
import { tagsList } from "./tagList";

const Tags = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        </div>
        <div className="col-lg-9">
          <div className="container mt-4">
            <h1 className="display-4 mb-3">Tags</h1>
            <p className="lead mb-4">
              A tag is a keyword or label that categorizes your question with
              other, similar questions.
            </p>
            <p className="lead mb-4">
              Using the right tags makes it easier for others to find and answer
              your question.
            </p>
            <div className="row">
              {tagsList.map((tag, index) => (
                <div key={index} className="col-md-4 mb-3">
                  <TagsList tag={tag} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
