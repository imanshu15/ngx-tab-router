# Tab Routing for Angular (NgxTabRouter)

[![Build Status](https://travis-ci.org/imanshu15/ngx-tab-router.svg?branch=master)](https://travis-ci.org/imanshu15/ngx-tab-router) [![NpmVersion](https://img.shields.io/npm/v/ngx-tab-router.svg)](https://www.npmjs.com/package/ngx-tab-router) [![Downloads](https://img.shields.io/npm/dt/ngx-tab-router.svg)](https://www.npmjs.com/package/ngx-tab-router) [![Fork](https://img.shields.io/github/forks/imanshu15/ngx-tab-router.svg?label=Forks&style=social)](https://github.com/imanshu15/ngx-tab-router)

An angular package for routing throughout the application using tabs,
  - Open component in a new tab dynamically
  - Search a component to open

You can find the demo here [NgxTabRouterDemo](https://imanshu15.github.io/ngx-tab-router/)
Or the stackblitz example here  [Stackblitz Demo](https://stackblitz.com/edit/ngx-tab-router)

### Installation

Install using npm,
```sh
$ npm install ngx-tab-router --save
```

Dependencies,

```sh
$ npm install @ng-bootstrap/ng-bootstrap
$ npm install bootstrap
$ npm install jquery
``` 

After installing above dependencies, add following refrences to the angular.json file.
 ```sh   
    {
        ...
        "styles": [
          ...
          "node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
        "scripts": [
          ...
          "node_modules/jquery/dist/jquery.min.js",
          "node_modules/bootstrap/dist/js/bootstrap.min.js"
        ]
    }
``` 
### Usage

##### Import

Add ```NgxTabRouterModule``` to your `module` file:
Also add ```NgbModule``` for bootstrap.

```javascript
declarations: [
    ..., // your components
    TestOneComponent,
    TestTwoComponent
],
imports: [
    ... , //your modules
    NgbModule,
    NgxTabRouterModule.forRoot({
       components: [ 
        {key: 'one', component: TestOneComponent, title: 'Component 1'},
        {key: 'two', component: TestTwoComponent, title: 'Component 2'}
      ],
      initialComponents : [ // set initial router tab
        {tabKey: 'one'}
      ],
      reloadOnTabChange: false
    })
],
 entryComponents: [ TestOneComponent, TestTwoComponent] // add router components to the entryComponents
```
Add ```<ngx-tab-router>``` to your `app.component` file:

 ```sh   
    <ngx-tab-router> </ngx-tab-router>
 ```
### Example

Refer to main app in this repository for working example.
Or this [Stackblitz Demo](https://stackblitz.com/edit//edit/ngx-tab-router) 

First you have to install the ngx-tab-router and the dependencies above mentioned. Then add the mentioned references to angular.json file.
After that import ```NgbModule``` and ```NgxTabRouterModule```  in your module file.
In `NgxTabRouterModule.forRoot()` method pass config the components.

After configuration you can either inject ```NgxTabRouterService``` in to a component and call `openTab(tabKey: string)` as following,
```javascript
  constructor(private tabService: NgxTabRouterService) { }

  openTabOne() {
    this.tabService.openTab('one'); 
    // this will open component configed with key 'one' in a new tab
  }
```

Or you can use the ```built in component search``` using keys ```CTRL + R```, which will let you type and enter the component key and it will open relevent component in a new tab.

##### Passing data to tab component
when you open the tab using openTab method you can pass a data object,
```javascript
  constructor(private tabService: NgxTabRouterService) { }

  openTabOne() {
    this.tabService.openTab('one', { id: 1, name: 'imanshu'});
    // here you can pass a data object
  }
```
In your component you just have to add a property called data,

```javascript
 export class TestComponent implements OnInit {
 
  public data: any; // define this, this will contain the data object you pass

  constructor() {
  }

  ngOnInit() {
    console.log('Data', this.data);
    // you can see { id: 1, name: 'imanshu'} here
  }
}
```

### Development

Want to contribute?
- Fork repository.
- Update ```./projects/ngx-tab-router```
- Build & Test the library.
- Update ```./src/app``` with new functionality.
- Update README.md accordingly.
- Pull request.

##### Instructions
- Download or clone the repository.
- Install dependencies ```$ npm install ```
- Start the app  ```$ npm start ```
- Build the app ```$ npm run build ``` or ```$ ng build ```
- Build the library after change run either ```$ npm run package ``` or ```$ ng build NgxTabRouter ``` 

verify app is working after ```$ npm start ```, 
```sh
http://localhost:4200
```


License
----
MIT
**Free Software**


 