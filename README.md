a readymade sails@0.12 app with users auth and mysql ready  
and JWT token applied in policies  

just create a new .env file and specify your environment variable as follow :

```
DB_HOST=localhost  
DB_USER=youruser  
DB_NAME=yourdb  
DB_PASS=yourpassword  
MIGRATE=alter #eg: alter,safe  
PORT=yourport #eg:- 1337  
```
Remember to run ```npm i -g sails@0.12```  
Then run ```npm install```  
To run the server run ```npm start```  

OR  

To continuos restart the server after code changes use ```nodemon```  
```npm i -g nodemon```  
Then just run ```nodemon app.js```  

***Remember that database mode is important, always use safe for production environment
