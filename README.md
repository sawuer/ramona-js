# Ramona Js - simple javascript lib for creating useful components
This is my first attempt to create my own Javascript library-framework.
This is a fairly simple library. 
But soon it will become a powerful tool in the hands of the front end developer.
Now better use the others libs like Vue or React)))

## Getting Started

1. Download or clone copy of this project
2. Include ramona.js to the top of your page
3. Create some div behind body tag with id or class (id is better)
4. Then include js file into bottom of the body tag
5. In the js file add next code:
```
new Ramona({
 entry: '#myAppName',
 data: {
  title: 'Title'
 },
 state: {
  header: true
 },
 logic() {
  var $ = this;
  // all logic
  // get data or states via $.data.title/$.state.header
 },
 view() {
  return {
   header: `
    <header>
     <div>
      ${this.data.title}
     </div>
	  </header>
   `,
   render() {
    return `
     ${this.header}
    `;
   }
  }
 }
});
```
* entry - element or your component/app
* data - all data of your component/app that used only in entry div
* state - states of you view() templates ('header' in example)
* logic() - all business logic of or your component/app
* view() - templates

## Authors

* **Ruslan Timurziyev** - *Work* - [Ramona Js](https://github.com/sawuer/ramona-js)

See also the list of [contributors](https://github.com/sawuer/ramona-js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

