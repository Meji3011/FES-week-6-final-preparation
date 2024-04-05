# User Posts App

This project is a React application that demonstrates the use of react-router-dom for routing and navigation, and axios for fetching data from an API. It was developed following the Week 6 final preparation video from Frontend Simplified.

[Accessible here](https://fes-week-6-final-preparation.vercel.app/)

# Features

- Displays information of all users retrieved from the jsonplaceholder API.
- Allows navigation to a specific user's posts by clicking on a user card.
- Provides a search functionality to search for posts by user ID.
  Implements a skeleton loading state while fetching data from the API.

# Technologies Used

- React: A JavaScript library for building user interfaces.
- react-router-dom: A library for handling routing and navigation in a React application.
- axios: A promise-based HTTP client for making API requests.
- jsonplaceholder: A fake online REST API for testing and prototyping.

# Project Structure

The project consists of the following components:

- App: The main component that sets up the routing using react-router-dom.
- Home: Displays a list of user cards fetched from the API.
- UserCard: A reuseable component for displaying user information.
- Posts: Displays posts specific to a user based on the user ID passed as a parameter.
- PostCard: A reusable component for displaying user posts.

# Improvement from original

I made the info display for user information and user posts into reusable components of UserCard.jsx and PostCard.jsx.

The project also includes a fetchUsers function in the Home component to retrieve user data from the API and a fetchPosts function in the Posts component to retrieve posts based on the user ID.

4/4/2024
