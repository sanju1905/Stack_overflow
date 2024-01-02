import React from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Avatar from "../../components/Avatar/Avatar";
import { deleteAnswer } from "../../actions/question";

const DisplayAnswer = ({ question, handleShare }) => {
  const User = useSelector((state) => state.currentUserReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };

  return (
    <div>
      {question.answer.map((ans) => (
        <div className="card mb-3" key={ans._id}>
          <div className="card-body">
            <p className="card-text">{ans.answerBody}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <button type="button" className="btn btn-primary mr-2" onClick={handleShare}>
                  Share
                </button>
                {User?.result?._id === ans?.userId && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                  >
                    Delete
                  </button>
                )}
              </div>
              <div className="text-right">
                <p className="card-text">
                  Answered {moment(ans.answeredOn).fromNow()}
                </p>
                <Link
                  to={`/Users/${ans.userId}`}
                  className="user-link"
                  style={{ color: "#0086d8" }}
                >
                  <Avatar
                    backgroundColor="lightgreen"
                    px="8px"
                    py="5px"
                    borderRadius="4px"
                  >
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avatar>
                  <div className="ml-2">{ans.userAnswered}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
