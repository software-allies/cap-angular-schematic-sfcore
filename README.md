# cap-angular-schematic-sfcore [![Generic badge](https://img.shields.io/badge/CAP-Active-<COLOR>.svg)](https://shields.io/)

## What are schematics?
Schematics are generators that transform an existing filesystem. They can create files, refactor existing files, or move files around.

What distinguishes Schematics from other generators, such as Yeoman or Yarn Create, is that schematics are purely descriptive; no changes are applied to the actual filesystem until everything is ready to be committed. There is no side effect, by design, in Schematics.


## **Previous requirements**

Previously, it must have a REST API created with `cap-generator` based Loopback, the product will soon be launched to the public as an easy and fast frontEnd and backEnd application generator using as a Heroku server.

**cap-angular-schematic-sfcore** use bootstrap's classes, You can use a CAP product to configure and install bootstrap to your project the installation is as follows.

```
ng add cap-angular-schematic-bootstrap@latest 4.0.0 true
```
![Alt text](https://raw.githubusercontent.com/software-allies/cap-angular-schematic-auth-auth0/development/assets/images/cap-angular-schematic-bootstrap.png "cap-angular-schematic-bootstrap")

you must have an authentication module, either from [Firebase](https://www.npmjs.com/package/cap-angular-schematic-auth-firebase) or [Auth0](https://www.npmjs.com/package/cap-angular-schematic-auth-auth0), we recommend using our CAP (Connect Application Platform) products for greater compatibility in your application.

## **Usage**
`Note`: the schematic only works within an angular project.

To run the schematic you have to execute the following command on your terminal.

```
ng add cap-angular-schematic-sfcore
```
![Alt text](https://raw.githubusercontent.com/software-allies/cap-angular-schematic-sfcore/development/assets/images/schematic.png "cap-angular-schematic-sfcore")

previously the schematic will ask an endPoint to be configured in the module.

* Enter the endPoint that will be communicated: `https://your-domain.herokuapp.com/api`
 
 Next, the Schematic will create a component for each SalesForce objects and create a file structure like the following.

```
modules
    |
    sales-force-core
        |  
        |-- account-sf/
        |-- contact-sf/
        |-- lead-sf/
        |-- opportunity-sf/
        |-- index/
        |-- routing.ts 
        |-- service.ts
        |-- module.ts     
```

Now you can run your server from your angular project that we just modified and open the browser at `http://localhost:4200/` and navigate on the different routes of the components of this schematic.

* `/:object`
* `/account`
* `/contact`
* `/lead`
* `/opportunity`

![Alt text](https://raw.githubusercontent.com/software-allies/cap-angular-schematic-sfcore/development/assets/images/CRUD.png "List")

* `/:object/:uuid`
* `/lead/0016g0000048gyAAAQ`

![Alt text](https://raw.githubusercontent.com/software-allies/cap-angular-schematic-sfcore/development/assets/images/DETAIL.png "List")

---
## Styles

Here we leave some styles already predefined for your application and this package to look cool. You only need to add [these files](https://github.com/software-allies/cap-angular-schematic-responsive/tree/development/src/cap-angular-schematic-responsive/files/src/assets/scss) in your application `/assets/scss`  and import the `main.scss` file in your `src/styles.scss` file in the following way:
```
@import '. /assets/scss/main.scss';
```

You can also do it automatically by calling a schematic for Angular as follows: 

```
ng add cap-angular-schematic-responsive <App title> false false false
```
