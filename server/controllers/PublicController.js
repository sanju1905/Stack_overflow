import createFilter from 'bad-words';

// export const Insta = require("../models/Quiz");

import path from 'path';

import {Insta}   from "../models/Quiz.js";



/**
 * Form to Share Views
 */
// exports.share = async (req, res) => {
//   try {
//     res.render("share", { title: "iStand" });
//   } catch (error) {
//     console.log(error);
//   }
// };

/**
 * Share Photos
 */
// export const Photos = async (req, res) => {
//   try {
//     const insta = await Insta.find();
//     res.json({ title: "iStand", insta }); // Send JSON response to the client
//     console.log(insta); // Log the data
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

export const Photos = async (req, res) => {
  try {
    console.log('Photo submit route hit');
    const insta = await Insta.find();
    res.json({ title: "iStand", insta });
   // Send JSON response to the client
    //console.log(insta); // Log the data
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};





/**
 * Share Thoughts
 */
export const Thoughts = async (req, res) => {
  try {
    const insta = await Insta.find();
    res.render("Thoughts", { title: "iStand", insta });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Share Videos
 */
export const Videos = async (req, res) => {
  try {
    const insta = await Insta.find();
    res.render("Videos", { title: "iStand", insta });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Share Audios
 */
// exports.Audio = async (req, res) => {
//   try {
//     const insta = await Insta.find();
//     res.render("Audio", { title: "iStand", insta });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const Audio = async (req, res) => {
  try {
    const insta = await Insta.find();
    res.render("audio", { title: "iStand", insta });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Share Submit
 */
// ... Other imports and code ...
export const shareSubmit = async (req, res) => {
  try {
    console.log('Share submit route hit');
    const { name, thoughts } = req.body;
    let photopath = null;
    let videopath = null;
    let audiopath = null;

    // Declare variables outside the if blocks with default values
    let p = ''; // default value for photo
    let v = ''; // default value for video
    let a = ''; // default value for audio

    // Use import.meta.url and path to get the current module's directory
    const currentModuleUrl = import.meta.url;
    const currentModulePath = path.dirname(new URL(currentModuleUrl).pathname);

    if (req.files) {
      const photofile = req.files.photo;
      const videofile = req.files.video;
      const audiofile = req.files.audio;

      if (photofile) {
        const photoname = `${Date.now()}_photo.jpg`;
        photopath = `./photo/${photoname}`;

        photofile.mv(photopath);
        p = `/${photoname}`;
      }

      if (videofile) {
        const videoFilename = `${Date.now()}_video.mp4`;
        videopath = `./video/${videoFilename}`;
        videofile.mv(videopath);
        v = `/video/${videoFilename}`;
      }

      if (audiofile) {
        const audioname = `${Date.now()}_audio.mp3`;
        audiopath = `./audio/${audioname}`;
        audiofile.mv(audiopath);
        a = `/audio/${audioname}`;
      }
    }

    const filter = new createFilter();
    filter.addWords("stupid", "otherOffensiveWord");

    // Check if thoughts is not null or undefined before filtering
    const filteredThoughts = thoughts ? filter.clean(thoughts) : '';

    const newData = new Insta({
      name,
      thoughts: filteredThoughts,
      photo: p,
      video: v,
      audio: a
    });

    newData.save();
    res.redirect("http://localhost:3000/Public");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};



