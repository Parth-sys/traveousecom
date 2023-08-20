# traveousecom
API Endpoints


1.              localhost:3000/category

API endpoint that retrieves a list of categories with
essential details such as categoryid and category from collection
result:



2.              localhost:3000/product/:categoryId?categoryId=0011

             API endpoint that retrieves a list of products with
             essential details such as title, price, description, and availability, based on
                categoryId

Query Params
categoryId
0011

Path Variables
categoryId
Body
raw (json)
json
{
    "categoryId":"00123"
}
Online




            


4.                 localhost:3000/Product/:ProductId
              API endpoint that retrieves a list of products with
          essential details such as title, price, description, and availability, based on
        ProductId

﻿

Path Variables:
ProductId
Body:
raw (json)
json
{
    "ProductId":"01111"
}


4.               localhost:3000/cart/:_id
                 API endpoint that delete products from cart
                based on id of product provided by mongodb collection.

﻿

Path Variables:
_id
Body:
raw (json)
json
{
    "_id":"64e1e1643e94e04f10de60ba"
}


5.                 localhost:3000/cart/:_id
                      API endpoint that update products quantity
                    based on id provided by cart collection of mongodb.

﻿

Path Variables
_id
Body
raw (json)
json
{
    "_id":"64e1e54c6a0b4c19a1bf7c88",
     "quantity":"2"
}

6.                localhost:3000/order
                auth token is requird to place order.If user is logged in then
                  token is generated after  login and it is required for authentication.

﻿

Request Headers:
x-auth-token 

raw(json):
{

    "title": "School bag",
    "Description": " school bag , for school,for college use",
    "Price": "300",
    "categoryId": "00123",
    "ProductId":"0011",
    "status": "available",
    "quantity": "3",
    "email": "parth123@gmail.com"
}


7.       localhost:3000/order/:orderId
             API endpoint that retrieves a list of orders with
                   essential details such as title, price, description, and availability, based on orderId

﻿

Path Variables:
orderId
Body:
raw (json):
{
    "orderId":"d110f0d3-1004-4105-8f0d-e05a3f5a7422"
}





8.        localhost:3000/orderH

            API endpoint that retrieves a list of orders with
                      essential details such as title, price, description, and availability.

﻿

Request Headers:
x-auth-token





9.           localhost:3000/users/signup

     For signup we nedd email,username and password.
     Register by passing email,username and password

﻿

Body:
raw (json)
json
{
    "email": "",
    "username": "",
    "password": ""
}



10.              localhost:3000/users/login
              For login we need to pass username and password .

﻿

Body:
raw (json)
json
{
    "username": " ",
    "password": " "
}
