## FilteringApp
This web app filters Aeroplanes on the basis of colors and 
allows user to sort in either ascending or descending order 
on the basis of maxspeed , year and pulse-laser.

User can also directly search for a plane from search Box.
 
Demo video of the project is attached at the end. 

----------------------------------------------------

## Cloning and Running the Application in local

1.) Clone the project into your local local machine 

2.) Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

3.) You need to create two ```.env```  file's , one in server folder and another one in frontend Folder.

4.) In the env file inside server folder create a variable
named DB and assign your mongodB database link to it .

```bash
DB = <your-mongodB-database-link>
```

5.) In the env file inside Frontend folder create a variable
named REACT_APP_API_URL and assign your api link to it .

```bash
REACT_APP_API_URL = http://localhost:8080/api/movies
```

6.) In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

--------------------------------------------------

## Demo video

https://user-images.githubusercontent.com/96301800/207763744-1d4cc3b0-1dd8-4542-af8c-19daa887b249.mov

