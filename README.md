# Memory Game

Welcome to my Memory Game - inspired by the Maven encounter in the renowned ARPG game Path of Exile. My game is a simple and engaging game built with React Native where the player must remember and replicate the order in which the circle's slices flash purple. 

## Table of Contents

- [Overview](#overview)
- [Gameplay](#gameplay)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Development](#backend-development)

## Overview

This project is built using React Native and Expo Router. The game utilizes SVGs to create a circle with slices and combines them with animations to provide an interactive and fun experience.

## Gameplay

- **Objective**: Remember the sequence in which the circle's slices flash purple.
- **Time Limit**: You have five seconds to complete the sequence.
- **Penalty**: Pressing a wrong slice results in a 1-second penalty.
- **Game Over**: If the timer reaches zero, the player loses.
- **Restart**: Players can quickly start over or select a new difficulty level after losing.

## Features

- React Native and Expo Router integration
- SVG-based game design with animations
- Time-based gameplay with penalties for mistakes
- Difficulty selection for varying challenges

## Installation

To get started with the Memory Circle Game, follow these steps:

### Frontend Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/memory-circle-game.git
   cd memory-circle-game
   ```

2. **Navigate to the frontend directory**
   ```sh
   cd frontend
   ```

3. **Install dependencies**
   ```sh
   npm install
   ```
   or
   ```sh
   npx expo install
   ```

5. **Start the development server**
   ```sh
   npx expo start
   ```

### Backend Setup (Work in Progress, BACKEND IS NOT REQUIRED FOR TESTING)

1. **Navigate to the backend directory**
   ```sh
   cd ../backend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the backend server**
   ```sh
   node index.js
   ```

## Usage

1. **Run the app**: After starting the development server, use the Expo Go app on your virtual device/mobile device to scan the QR code and run the game.
2. **Play the game**: Follow the on-screen instructions to play the game and test your memory skills.
3. **Change difficulty**: Select different difficulty levels to challenge yourself further.

## Backend Development

Work in progress: I am in the process of creating a backend to efficiently store player data, such as:

- Account creation
- Highscores (currently stored on backend in arrays, deleted on server restart)
- Custom difficulties

Stay tuned for updates!
