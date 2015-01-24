#Shopping List


##Purpose

Creating a shopping list application where user can create, view and modify his shopping list.
This document contains implementation details of shooping list app along with the optional/future work


##Implementation

###Technology Stack
- FrontEnd: AngularJS, Bootstrap (for single page responsive web app)
- BackEnd: Node.js (suitable for IO and concurrent access. Takes less development time)
    - [node.js](http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js)
- Database: MongoDB

##REST API endpoints

###Shopping list API
- GET    v1/api/shoppinglist         Get all shopping list
- GET    vi/api/shoppinglist/<id>    Get a shopping list
- POST   vi/api/shoppinglist         Create a shopping list
- PUT    vi/api/shoppinglist/<id>    Update a shopping list
- PATCH  vi/api/shoppinglist/<id>    Update a shopping list
- DELETE vi/api/shoppinglist/<id>    Delete a shopping list

**Note:** Keeping Mobile First approach in mind, REST API should be stateless

###Auth API
- POST api/auth/tokenGen      Generate auth token
- POST api/auth/tokenVal      Validate auth token
- POST api/auth/tokenDelete   Delete auth token


