# cap-angular-schematic-sfcore [![Generic badge](https://img.shields.io/badge/CAP-Active-<COLOR>.svg)](https://shields.io/)

## What are schematics?
Schematics are generators that transform an existing filesystem. They can create files, refactor existing files, or move files around.

What distinguishes Schematics from other generators, such as Yeoman or Yarn Create, is that schematics are purely descriptive; no changes are applied to the actual filesystem until everything is ready to be committed. There is no side effect, by design, in Schematics.

## **`Important!`**
In order to use the scheme globally in any Angular project on your PC, you must do the installation globally.
```
npm i -g cap-angular-schematic-sfcore
```

## **Previous requirements**

Previously, it must have a REST API created with `cap-generator` based Loopback, the product will soon be launched to the public as an easy and fast frontEnd and backEnd application generator using as a Heroku server.

**cap-angular-schematic-sfcore** use bootstrap's classes. To be able to display the component in the right way. Schematic install bootstrap automatically to the most recent version and you have to configure the `angular.json` and write into `styles` [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/):

```
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
  ],
  "scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]
```

## **Usage**
`Note`: the schematic only works within an angular project.

To run the schematic you have to execute the following command on your terminal.

```
ng g cap-angular-schematic-sfcore:cap-angular-schematic-sfcore
```

previously the schematic will ask an endPoint to be configured in the module.

* Enter the endPoint that will be communicated: < https://your-domain.herokuapp.com/api >
 
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