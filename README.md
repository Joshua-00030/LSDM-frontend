# Getting Started with Project Trace
To run Project Trace locally simply clone this github and then run:

npm install

npm start

This will create a frontend development server. As this project is hosted by vercel no build file is created locally. one can be created using:

npm build

The database connection cannot be made public, meaning custom forks of this project must create their own database to make any databse adjustments. They can then adjust their API calls to said database. Otherwise the current api calls should return the data present at the time this file was last edited, 4/30/2023. Calls must be made through SSL/https

A similar backend can be created by using the code found at:

https://github.com/Joshua-00030/ProjectTrace-Backend
