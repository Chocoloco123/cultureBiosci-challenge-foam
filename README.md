# Foam App

Built by [Caroline Sarkki](https://chocoloco123.github.io/index.html)

Live link here: [Foam App](https://foamapp-proj.herokuapp.com/)

Video link walkthrough here: [Walkthrough](https://www.loom.com/share/c9ba615c865945fc8932ea5383f296f7)

## Getting started

1. Clone this repository (only main branch)

   ```bash
   git clone https://github.com/Chocoloco123/cultureBiosci-challenge-foam.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, open up a second terminal, cd into the react-app directory and run using `npm start`.

7. Enjoy!


### Thank you for taking the time to check out my application!




