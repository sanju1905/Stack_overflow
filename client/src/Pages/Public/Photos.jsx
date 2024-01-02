import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

const Photos = () => {
  const [insta, setInsta] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/public/Photos");
      const updatedInsta = response.data.insta.map((entry) => ({
        ...entry,
        photo: entry.photo ? `/photo${entry.photo}` : "",
        audio: entry.audio ? `/public${entry.audio}` : "",
      }));
      console.log(
        "Constructed Image Paths:",
        updatedInsta.map((entry) => entry.photo)
      );
      setInsta(updatedInsta);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className="container mt-5" style={{ marginTop: "50px" }}>
      <h1>Sanjay</h1>
      <div className="row">
        {insta.map((entry) => (
          <div key={entry._id} className="col-md-6 mb-3">
            <div className="result-card mt-4 p-3 shadow">
              <div className="card-body">
                <h2 className="card-title text-primary">
                  <i className="bi bi-person text-success"></i>: {entry.name}
                </h2>
                <img
               
                 src={`${entry.photo}`}
                  alt={entry.photo}
                  className="card-img img-fluid"
                  style={{ objectFit: "contain" }}
                  // onError={(e) => {
                  //   console.error(`Error loading image: ${entry.photo}`);
                  //   e.target.style.display = "none"; // Hide the broken image
                  // }}
                />

                <h3>{entry.thoughts}</h3>
                {/* {entry.audio && entry.audio !== "" && (
                  <audio controls>
                    <source src={entry.audio} type="audio/mp3" />
                    Your browser does not support the audio tag.
                  </audio>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
