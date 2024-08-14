# MasterJi Assignment Submission

## Overview

This project is a submission for the MasterJi assignment. The goal of this assignment was to implement three tasks based on provided Figma designs using React.js, including API integration with FreeAPI.app. The tasks are divided into three components:

1. **Random User Profile**: Displays a user profile with data fetched from a random user API.
2. **Random Jokes Tweet**: Simulates a tweet with a random joke, with additional features like randomly generated timestamp, views, and other analytics.
3. **Cats Listing**: A paginated list of horizontal scrolling cards that display cat information fetched from an API.

Each task is implemented on a separate route, and the home route redirects to the first task.

## Live Demo

[Live Demo](https://66bd02207cf6ac175976e888--exquisite-druid-f6ae6e.netlify.app/)


## Project Structure

- **/random-user**: Displays a random user profile.
- **/random-jokes**: Displays a tweet with a random joke.
- **/cats-listing**: Displays a paginated list of cats.

## Features

### Random User Profile
- Match component styling as per Figma design.
- Refresh button to fetch the next set of random data.
- Loading state for the card.
- Hyperlinks for location and call actions that open in a new tab.

### Random Jokes Tweet
- Static tweet author details.
- Randomly generated timestamp, views, and other analytics.
- Loading state for the tweet card.
- New joke data is fetched and displayed on page reload.

### Cats Listing
- Paginated list of horizontally scrolling cards displaying cat information.
- Loading state for the cards.
- Full list of cats fetched by pagination with a limit defined by the developer.

## Technologies Used

- React.js
- Axios for API requests
- Tailwind CSS for styling
- Lodash for utility functions
- React Hot Toast for notifications

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dhimannikhil300/ChaiAurCodeAssignment2.git
2. Navigate to the project directory
3. Install dependencies
    ```
    npm install
4. Run Project 
    ```
    npm run dev
