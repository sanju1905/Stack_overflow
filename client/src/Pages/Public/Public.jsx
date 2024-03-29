import React from "react";

const Public = () => {
  return (
    <div>
      <div class="px-4  text-center mt-5">
        <h1 class="display-6 fw-bold">You aren't Alone</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead">
            Share your Thoughts with thousands of your Friends across the World
            and Smile
          </p>
        </div>
      </div>

      <div class="row justify-content-center cart-card">
        <div class="col-lg-8">
        <form action="http://localhost:5000/public/share" enctype="multipart/form-data" method="post">

            <div class="form-group">
              <label for="name">Name :</label>
              <input type="text" class="form-control" name="name" id="name" />
            </div>
            <br />

            <div class="form-group">
              <label for="thoughts">What's in your Mind :</label>
              <textarea
                class="form-control"
                name="thoughts"
                id="thoughts"
              ></textarea>
            </div>
            <br />

            <div class="form-group">
              <label for="photo">Post your best Clicks :</label>
              <input type="file" class="form-control" name="photo" id="photo" />
            </div>
            <br />

            <div class="form-group">
              <label for="audio">Any Songs :</label>
              <input type="file" class="form-control" name="audio" id="audio" />
            </div>
            <br />

            <div class="form-group">
              <label for="video">Any memorable Videos :</label>
              <input
                type="file"
                class="form-control"
                name="video"
                id="video"
                accept=".mp4"
              />
            </div>
            <br />

            <div class="form-group mt-4">
              <button type="submit" class="btn btn-outline-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Public;
