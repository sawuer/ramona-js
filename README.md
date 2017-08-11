# Ramona Js - simple javascript lib for creating useful components
This is first attempt to create my own Javascript library/framework.
This is a fairly simple library and a little bit dumb.
But soon it will become a powerful tool in the hands of the front end developers.
Or only in my hands...
Now better use the others normal libs like Vue or React :)

## Getting Started

1. Download or clone project copy
2. Include ramona.js to the top of your page
3. Create some div behind body tag with id or class (id is better)
4. Then include js-file into bottom of the body tag
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  **<script type="text/javascript" src="ramona.js"></script>**
</head>
<body>
  **<div id="myAppName"></div>**
  **<script type="text/javascript" src="app.js"></script>**
</body>
</html>
```
5. Into js-file add next code:
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
    var $ = this; //
    // all logic contains it that place
    // the way getting data or states are $.data.title/$.state.header
  },
  view() {
    return {
      header: `
        <header>
          <h1>${this.data.title}</h1>
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

## Docs

* entry - entry element of your new Ramona instance
* data - all instance data
* state - boolean props for watching templates states of view()
* logic() - all business logic of your component
* view() - templates

You can notice that state prop "header" are equal view() prop and name of this tag.
**This is the only way to create a dependency of "state" and "views()".**
If you put "false" into "this.state.header" header will leave the DOM.

### Public methods and props

You can "die" your instance using same name method:
```
// at first create new Ramona instance
var myApp = new Ramona({
  // all props and logic
})
myApp.die(); // use it anywhere if you want "kill" your instance
```
You can also use public props if you want:
```
myApp.data.title; // 'Title'
myApp.entry;      // '#myAppName'
```
It's all for now!

## Author

* **Ruslan Timurziyev**  - [Github](https://github.com/sawuer/)

See also the list of [contributors](https://github.com/sawuer/ramona-js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

