#Shopping List

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

#### Installing git
```
sudo apt-get update
sudo apt-get -y install git
```

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
#####Installing dependencies
- install nodejs
- install forever
- install nginx
- install mongodb

#####[Port forwarding](http://docs.vagrantup.com/v2/getting-started/networking.html)
This allows you to access a port on your own machine, but actually have all the network traffic forwarded to a specific port on the guest machine.
```
 Update Vagrantfile with below content

  config.vm.box = "hashicorp/precise32"
  config.vm.network :forwarded_port, host: 4567, guest: 80

```
- setting node_env
 - vi ~./bashrc
 - export NODE_ENV=production
 - source ~/.bashrc

- Setting up nginx
  - create configuration file in /etc/nginx/site-available
  - create link in /etc/nginx/site-enabled
    - sudo ln -s /etc/nginx/sites-available/shoppinglistapp /etc/nginx/sites-enabled/shoppinglistapp

Content for /etc/nginx/sites-available/shoppinglistapp configuration file

```
server {
    listen 80;

    server_name shoppinglistapp;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

```
Our First vagrant machine is setup. Now we will create copy of this vagrant machine.


 ##### Copying vagrant box
 ```
 Run below command in home directory of first vagrant machine.

 $ vagrant package
 ```
 ##### Creating another vagrant machine
 ```
Creating directory for second vagrant machine.

 $ mkdir vagrantMachine2
 $ cd vagrantMachine2
 $ vagrant init

Update Vagrantfile with below content

  config.vm.box = "base"
  config.vm.box_url = "package.box"
  config.vm.network :forwarded_port, host: 4568, guest: 80

Running vagrant machine

 $ vagrant up


 ```

####Deploy code on nginx running on 2 instances of vagrant

Run below command in your project home directory
```
$ grunt build

```
Copy dist directory and node_modules into both vagrant machine

Go to dist and run below command
```
$ forever start server/app.js
```
this will run application on port 8080.

####Load Balancer
[nginx load balancer configuration](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-load-balancingl)

Update your nginx config file as:

```
upstream backend  {
  server 127.0.0.1:4567 max_fails=1  fail_timeout=5s;
  server 127.0.0.1:4568 max_fails=1  fail_timeout=5s;
}

server {
  location / {
    proxy_pass  http://backend;
  }
}



```
##How to test


##Future development

### Docker Support
#####[Installing Docker](https://docs.docker.com/installation/ubuntulinux/#ubuntu-trusty-1404-lts-64-bit)
```
$ sudo apt-get update
$ sudo apt-get install docker.io
```
