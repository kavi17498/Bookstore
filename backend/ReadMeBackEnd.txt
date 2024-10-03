npm init
--pass the git repository Link
Go to ExpressJS documentation
--intall express ExpressJS
--copy the hello world code

set packge.json 
--we should set like below under script segment
"start":"node index.js"
--then we could start the server.

but the real time changes would never happen
--for this problem solution is install nodemon.
then set the package.json as like below.
"start":"nodemon index.js"

then its update realtime


*we need to store sensite information in the .env file ** 
Examples - PORT NUMBER

for to do that first we need to install the dotenv package.
npm i dotenv

then i add a new item to package.jason for module import
"type":"module"

Start monogo db connection and copy the connection string.


Before use the mongoDB install the 
npm i mongoose

after creating model,controllers and routes ,we should check the api using POSTMAN,

then we need to install axios in the front for work with API s

After setUp the Front end and all we need to install
npm i cors - this helps to access the backend port to front end.

setup cors in the index.js.

now we are going to setup Userlogin,
for that create a model,controller and route for user.