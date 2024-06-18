
<img width="1470" alt="Screenshot 2024-06-17 at 14 13 11" src="https://github.com/olivergorgievv/ZoroDesign/assets/111359274/dd9283e4-05ee-4852-a5ba-3ec5842b5438">
<img width="1470" alt="Screenshot 2024-06-17 at 14 14 41" src="https://github.com/olivergorgievv/ZoroDesign/assets/111359274/3cc57c16-e74b-45f0-a9a9-d49a51bf5115">
<img width="1470" alt="Screenshot 2024-06-18 at 09 44 22" src="https://github.com/olivergorgievv/ZoroDesign/assets/111359274/58037d9d-b660-4ec7-97f5-3ba935f24ced">



## Overview

This project is a product management dashboard built with React, React Query, and Firebase. It includes user authentication and a product page that can be accessed only if the user is authenticated. The dashboard allows logged-in users to add, update, delete, and search for products displayed on the website.

## Features

- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Protected Routes**: Product page and dashboard are accessible only to authenticated users.
- **Product Management**: Add, update, delete, and search for products.
- **Real-time Data**: Uses Firebase Firestore for real-time data management.
- **Asynchronous Data Fetching**: Utilizes React Query for data fetching and state management.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Query**: For fetching, caching, and updating asynchronous data in React.
- **Firebase**: For backend services including authentication and Firestore database.
- **Tailwind CSS**: For styling the application.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/product-management-dashboard.git
   
2. **Install dependencies:**
   ```sh
   npm install

3. **Firebase Configuration:**
 Create a .env file in the root directory and add your Firebase configuration
   ```sh
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id

4. **Run the build**
    ```sh
   npm run dev
 
