import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const PORT = 4000;
const app = express();

// Middleware
app.use(cors({
  //origin: "http://localhost:3000", // FRONTEND when working locally
  //origin: "exp://192.168.1.201:8081",
  origin: "*",
 // origin: "http://13.53.190.247:3000",
  //origin: process.env.FRONTEND_HOST,
  //credentials: true, // allows cookies or something
}));

app.use(bodyParser.json());
app.use(express.json()); // not needed?
//app.use(cookieParser());

// Generera engångslösenord (token)
function generateOTP() {
  //one time password
  // Generera en sexsiffrig numerisk OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

app.get("/", (req, res) => {
  // "/ är startsidan på BACKEND, t.ex. http://localhost:4000 "
  res.send("Hello World");
});


let hardestDifficultyPerfected = {
  title: "None",
  sequenceLength: 0,
};

// http://localhost:4000/currentHighscore
app.get("/currentHighscore", (req, res) => {
  //res.send(`Hardest difficulty Perfected: ${hardestDifficultyPerfected.title} <br>sequenceLength: ${hardestDifficultyPerfected.sequenceLength}`); // <br> gives a linebreak, HTML response

  res.json(
    hardestDifficultyPerfected // dont wrap with {} since it is already an object
  );
})

// Hard sequenceLength = 5, Medium sequenceLength = 4, Easy sequenceLength = 3
app.post("/updateHighscore", (req, res) => {

  try {

    const { titleDifficultyPerfected, sequenceLength } = req.body;

    if ( !titleDifficultyPerfected, !sequenceLength ) {
      return res
        .status(400)
        .json({ error: "titleDifficultyPerfected and sequenceLength is required in /updateHighscore request" });
    }

    if (hardestDifficultyPerfected.sequenceLength == 0 || sequenceLength > hardestDifficultyPerfected.sequenceLength) {
      hardestDifficultyPerfected.title = titleDifficultyPerfected;
      hardestDifficultyPerfected.sequenceLength = sequenceLength;
      console.log("User has beaten a new difficulty! Updating hardestDifficultyPerfected to:", titleDifficultyPerfected, " with sequenceLength:", sequenceLength);
      return res.status(201).json({
        message: `User has perfected a new difficulty, updated hardestDifficultyPerfected!`,
      });
    } else if (hardestDifficultyPerfected.sequenceLength > sequenceLength) {
      console.log("User has beaten harder difficulties than", titleDifficultyPerfected, ", will not update hardestDifficultyPerfected");
      return res.status(201).json({
        message: `Will not update hardestDifficultyPerfected, user has already beaten a harder difficulty before: ${hardestDifficultyPerfected.title}`,
      });
    } else if (hardestDifficultyPerfected.sequenceLength == sequenceLength) {
      console.log("User has already beaten difficulty", titleDifficultyPerfected, "will not update hardestDifficultyPerfected");
      return res.status(201).json({
        message: `Will not update hardestDifficultyPerfected, user has already beaten this difficulty (${hardestDifficultyPerfected.title})`,
      });
    } else {
      // what other cases are there?
      console.log("/updateHighscore if-statement?");
    }

  } catch (error) {
    console.error("1:Error when running /updateHighscore endpoint:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

})


// Starta servern
app.listen(PORT, () => {
  console.log(`Memory Game backend körs på http://localhost:${PORT}`);
});

/* module.exports = app; */

export default app;