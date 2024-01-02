import Questions from "../models/Questions.js";
import mongoose from "mongoose";
import path from 'path';

import '../index.js';  // It's not clear why you are importing this. Make sure it's necessary.





export const AskQuestion = async (req, res) => {
  try {
    const codeFile = req.files.code;
    const videoFile = req.files.video;

    // Ensure the codeFolder and videoFolder directories exist
    createDirectoryIfNotExists(codeFolderPath);
    createDirectoryIfNotExists(videoFolderPath);

    const codeFileName = `${Date.now()}_code${getFileExtension(codeFile.name)}`;
    const videoFileName = `${Date.now()}_video.mp4`;

    const codePath = path.join(__dirname, '../codeFolder', codeFileName);
    const videoPath = path.join(__dirname, '../videoFolder', videoFileName);
 console.log(codePath)
    codeFile.mv(codePath);
    videoFile.mv(videoPath);

    // Assuming you have a model named Questions and you need to create an instance
    const postQuestion = new Questions({
      // ... Include necessary fields from postQuestionData
      // Example: title, body, tags, etc.
      userId: req.userId,  // Assuming userId is available in the request
      // ... Add other fields as needed
    });

    await postQuestion.save();

    res.status(200).json("Posted a question successfully");
  } catch (error) {
    console.error(error);
    res.status(409).json("Couldn't post a new question");
  }
};

function getFileExtension(filename) {
  const dotIndex = filename.lastIndexOf('.');
  return dotIndex === -1 ? '' : filename.slice(dotIndex + 1);
} 
export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await Questions.find().sort({ askedOn: -1 });
    res.status(200).json(questionList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  try {
    await Questions.findByIdAndRemove(_id);
    res.status(200).json({ message: "successfully deleted..." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const { value } = req.body;
  const userId = req.userId;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  try {
    const question = await Questions.findById(_id);
    const upIndex = question.upVote.findIndex((id) => id === String(userId));
    const downIndex = question.downVote.findIndex(
      (id) => id === String(userId)
    );

    if (value === "upVote") {
      if (downIndex !== -1) {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
      if (upIndex === -1) {
        question.upVote.push(userId);
      } else {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
    } else if (value === "downVote") {
      if (upIndex !== -1) {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
      if (downIndex === -1) {
        question.downVote.push(userId);
      } else {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
    }
    await Questions.findByIdAndUpdate(_id, question);
    res.status(200).json({ message: "voted successfully..." });
  } catch (error) {
    res.status(404).json({ message: "id not found" });
  }
};
