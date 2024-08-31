Shiver - Film Recommendation Web App
Shiver is a web application designed to recommend movies based on genres. The app currently includes a local database setup for development purposes.

Getting Started
Prerequisites
Before you start, ensure you have the following installed:

Node.js (version 14.x or later)
npm (Node Package Manager)
NoSQL Database (e.g., MongoDB)
Setup
Follow these steps to get Shiver running locally:

1. Clone the Repository
First, clone the repository to your local machine:

`git clone git@github.com:Meanzar/Shiver.git`
`cd shiver`

2. Install Dependencies
On the Root Directory
Navigate to the root directory of the project (where package.json is located) and install the required dependencies:

`npm install`

On the Server Directory
Open a new terminal, navigate to the server directory, and install the server dependencies:

`cd server`
`npm install`

3. Configure Environment Variables
Create a .env file in the server directory of the project and add your database configuration. The .env file should include the necessary environment variables for your NoSQL database connection.

Example .env file:

`DB_HOST=localhost
DB_PORT=27017
DB_NAME=shiver`
Make sure to replace the values with your local database configuration.

In the front environment make sure to have a proxy in the package.json it should look like this: 

 ` "proxy": "http://localhost:4000",`

4. Start the Application
Start the Server
In the server directory, start the server:

`npm start`

Start the Frontend
Return to the root directory and start the frontend application:

`npm start`

The frontend will be served under http://localhost:3000 by default, and the server will run on http://localhost:4000.

> Notes: 
Shiver uses CRACO for custom configuration of Create React App.
The application does not currently include a public database. For local development, ensure your NoSQL database is running and correctly configured in the .env file.
Troubleshooting
If you encounter issues:

Verify that your .env file is correctly configured.
Ensure that both the server and frontend are running on their respective ports.
Check for any error messages in the terminal and consult the relevant documentation.
For further assistance, feel free to open an issue in the repository.
