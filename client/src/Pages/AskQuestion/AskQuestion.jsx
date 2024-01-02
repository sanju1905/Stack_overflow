import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./AskQuestion.css";
import { askQuestion } from "../../actions/question";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  const [codeFile, setCodeFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionFile: codeFile,
              questionVideo: videoFile,
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
            },
            navigate
          )
        );
      } else alert("Please enter all the fields");
    } else alert("Login to ask a question");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };

  const handleCodeFileChange = (e) => {
    setCodeFile(e.target.files[0]);
  };

  const handleVideoFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  return (
    <div className="container mt-5">
      <div className="ask-question">
        <div className="ask-ques-container">
          <h1 className="mb-4">Ask a Public Question</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="ask-ques-title" className="form-label">
                  <h4>Title</h4>
                  <p className="form-text">
                    Be specific and imagine you’re asking a question to another
                    person
                  </p>
                  <input
                    type="text"
                    id="ask-ques-title"
                    className="form-control"
                    onChange={(e) => setQuestionTitle(e.target.value)}
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  />
                </label>
              </div>
              <div className="col-md-6">
                <label htmlFor="ask-ques-tags" className="form-label">
                  <h4>Tags</h4>
                  <p className="form-text">
                    Add up to 5 tags to describe what your question is about
                  </p>
                  <input
                    type="text"
                    id="ask-ques-tags"
                    className="form-control"
                    onChange={(e) =>
                      setQuestionTags(e.target.value.split(" "))
                    }
                    placeholder="e.g. (xml typescript wordpress)"
                  />
                </label>
              </div>
            </div>
            <label htmlFor="ask-ques-body" className="form-label mt-3">
              <h4>Body</h4>
              <p className="form-text">
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=""
                id="ask-ques-body"
                className="form-control"
                onChange={(e) => setQuestionBody(e.target.value)}
                cols="30"
                rows="10"
                onKeyPress={handleEnter}
              ></textarea>
            </label>

            <div className="mb-3">
              <label htmlFor="code" className="form-label">
                <h4>Upload Code File</h4>
                <input
                  type="file"
                  id="code"
                  name="code"
                  className="form-control"
                  onChange={(e) => handleCodeFileChange(e)}
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="video" className="form-label">
                <h4>Upload Video File</h4>
                <input
                  type="file"
                  id="video"
                  name="video"
                  className="form-control"
                  onChange={(e) => handleVideoFileChange(e)}
                />
              </label>
            </div>

            <div className="text-center">
              <input
                type="submit"
                value="Review your question"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
