import React from 'react';

const Audio = ({ insta }) => {
  return (
    <div className="container">
      <div className="row">
        {insta.map((question, index) => {
          return question.audio ? (
            <div key={index} className="col-md-6 mb-3">
              <div className="result-card mt-4 p-3 shadow">
                <div className="card-body">
                  <h2 className="card-title text-primary">
                    <i className="bi bi-person text-success"></i>: {question.name}
                  </h2>

                  <div className="mt-4">
                    <audio controls className="w-100">
                      <source src={question.audio} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
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

export default Audio;
