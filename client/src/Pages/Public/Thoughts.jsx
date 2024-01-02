import React from 'react';

// Import Bootstrap CSS (add this to the head of your HTML file or include it in your project's setup)
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';

const Thoughts = ({ insta }) => {
  return (
    <div className="container">
      <div className="row">
        {insta.map((question, index) => {
          return question.thoughts ? (
            <div key={index} className="col-md-6 mb-3">
              <div className="result-card mt-4 p-3 shadow">
                <div className="card-body">
                  <h2 className="card-title text-success">
                    <i className="bi bi-person text-success"></i>: {question.name}
                  </h2>

                  <div className="mt-4">
                    <h2 className="text-primary">{question.thoughts}</h2>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Thoughts;
