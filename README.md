# YouTube App Clone

This project is a YouTube app clone built using React and other modern web technologies. It aims to replicate some of the core features of the YouTube platform, providing users with a familiar interface for browsing and watching videos.

## Tech Stack

- **React**: The project is built using create-react-app, a popular tool for setting up React applications quickly.
- **CSS**: Tailwind CSS is used for styling, allowing for rapid development and easy customization.
- **Routing**: React-router-dom is utilized for client-side routing, enabling seamless navigation between different pages of the app.
- **State Management**: Redux Toolkit is employed for managing application state, ensuring efficient data flow and centralized state management.

## UI Features

- **Home Page**: The home page displays video cards and includes a hamburger menu for navigation convenience.
- **Dark/Light Mode**: The app includes a dark/light mode feature implemented using the context API, providing users with a customizable viewing experience.
- **Search Bar**: Utilizes debouncing for efficient search functionality.
- **Video Playback**: Clicking on a video card takes users to the watch page of the respective video, where they can view the video frame and interact with like/dislike buttons.
- **Nested Comments**: The watch page features nested comments built using recursion and depth-first search (DFS), enhancing engagement and interaction.
- **User Page**: Displays user information such as profile picture, name, and location.
- **Error Page**: Implemented using useErrorRouter to handle incorrect URLs gracefully, ensuring a smooth user experience.

### Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm start`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
