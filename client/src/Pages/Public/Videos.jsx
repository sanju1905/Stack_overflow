import React from 'react';

// Import Bootstrap CSS (add this to the head of your HTML file or include it in your project's setup)
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';

const Videos = ({ insta }) => {
  return (
    <div className="container">
      <div className="row">
        {insta.map((question, index) => {
          return question.video ? (
            <div key={index} className="col-md-6 mb-3">
              <div className="result-card mt-4 p-3 shadow">
                <div className="card-body">
                  <h2 className="card-title text-primary">
                    <i className="bi bi-person text-success"></i>: {question.name}
                  </h2>

                  <div className="mt-4">
                    {/* Use Bootstrap's embed-responsive class for responsive video embedding */}
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        src={question.video}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
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

export default Videos;
