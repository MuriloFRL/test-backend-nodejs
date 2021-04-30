teste back-end speedio

Autor: Murilo Arvoredo Souto

Técnologias utilizadas:

    nodejs
    express
    mongodb
    mongoose
    dotenv
    nodemon
    postman


Instalação:
    1- npm install.
    2- install postman and mongodb.
    3- verify if your port 3000 can be used.
    4- npm start to run the api.
    5- open postman and then load the postman collection thats inside the project root.
    6- in postman you can find some examples from the routes the api uses:

GET http://localhost:3000/products -- Lists all the products in the database.
GET http://localhost:3000/products/filter/PARAMETER -- Lists products filtered by the parameter passed in the URL.
POST http://localhost:3000/products -- Register a product in the database, in postman go to body > raw and then select json:
{
    "title":"titleExample",
    "description":"descriptionExample",
    "price":333,
    "category":"categoryExample"
}
PATCH http://localhost:3000/products/:id -- Here you can edit a product category one at time and the ID is a parameter that you need to provide, when you list all the products you can get their ID.
{
    "category":"category-editedExample"
}
DELETE http://localhost:3000/products/:id -- Delete a product in the database, the ID is a parameter that you need to provide, you can get the ID after consulting the database via GET.
