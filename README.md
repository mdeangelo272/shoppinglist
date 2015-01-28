#Shopping List
URL: http://shoppinglistapp-varunhooda.rhcloud.com/

###Purpose

Creating a shopping list application where user can create, view and modify his shopping list.
This document contains implementation details of shooping list app along with the optional/future work


##Technology Stack
- FrontEnd: AngularJS, Bootstrap (for single page responsive web app)
- BackEnd: Node.js (suitable for IO and concurrent access. Takes less development time), express.js
    - [node.js](http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js)
- Database: MongoDB
- Yoeman: [Yeoman angular fullstack generator](https://github.com/DaftMonk/generator-angular-fullstack) to create seed project
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)
- Web server: nginx


##REST API endpoints

####Shopping list API
- GET    v1/api/shoppinglist         Get all shopping list
- GET    vi/api/shoppinglist/<id>    Get a shopping list
- POST   vi/api/shoppinglist         Create a shopping list
- PUT    vi/api/shoppinglist/<id>    Update a shopping list
- PATCH  vi/api/shoppinglist/<id>    Update a shopping list
- DELETE vi/api/shoppinglist/<id>    Delete a shopping list

**Note:** Keeping Mobile First approach in mind, REST API should be stateless

####Auth API
- POST api/auth/tokenGen      Generate auth token
- POST api/auth/tokenVal      Validate auth token
- POST api/auth/tokenDelete   Delete auth token



## Installation

#### Installing node

```
$ sudo apt-get install python-software-properties
Then, do this:

$ sudo add-apt-repository ppa:chris-lea/node.js
$ sudo apt-get update
$ sudo apt-get install nodejs
Then, you have the latest version of node.js installed.

$ ln -s /usr/bin/nodejs /usr/bin/node
```

#### Installing npm
```
$ sudo apt-get install npm
$ npm install express
```

#### Installing grunt globally

```bash
$ npm install -g grunt-cli
```

####Installing bower globally
```
$ npm install -g bower
```

#### Installing Yoeman globally

```
$ npm install -g yo

```
- Install code generator

```
$ npm install -g generator-angular-fullstack
```

####Installing mongodb
[Click here for installation steps](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-12-04)


####Installing nginx
```
sudo apt-get update
sudo apt-get install nginx
```

##Implementation

######Create seed project
Create seed project using [Yeoman angular fullstack generator](https://github.com/DaftMonk/generator-angular-fullstack)

```
$ yo
```

######Create Shoppinglist API endpoints
```
yo angular-fullstack:endpoint shoppinglist
```

######Create Shoppinglist route
```
yo angular-fullstack:route shoppinglist
```

######Create an AngularJS service for Shoppinglist
```
yo angular-fullstack:service shoppinglistservice
```

## Running Application

Go to project home directory

```
$ npm install
$ bower install
$ grunt serve OR
$ grunt serve:dist
```
#### Running application in background

######Install forever
```
$ sudo npm install forever -g
$ forever start server/app.js
$ forever stop server/app.js
```

##Deployment

####Deploy on openshift
```
$ yo angular-fullstack:openshift

If your openshift token has been expired then 

$ rhc authorization

Pushing updates
$ grunt build

Commit and push the resulting build, located in your dist folder:
$ grunt buildcontrol:openshift
```
#### Setting up vagrant

```
install vagrant

vagrant init hashicorp/precise32

vagrant up
```
####Deploy on nginx running on 2 instances of vagrant

####Load Balancer


##How to test


##Future development


