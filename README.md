# SVG generator for templates

SVG generator is a project that provides you a script to generate a svg inside a template that you define. For build this script I used:
* [EJS](https://ejs.co)
* [rimrag](https://www.npmjs.com/package/rimraf)
* [colors](https://www.npmjs.com/package/colors)

To run this projects you need:

* clone this repository
* Install the dependences:

```
npm install
```

* to generate icons you need running a script that is in package.json.

```
npm run generate-icons
```

# About generate icons script in package json

This script execute the generateIcon js file, as second argument you must pass the origin icon files, in the third you must pass the destiny file and fourth you pass the file type that is generated. 
Vue components is the default template.