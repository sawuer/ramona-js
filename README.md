# Ramona Js 
Ramona Js - simple js library for creating useful components which have own **entry element, static props, states, views, and logic.**
This is the first attempt to create my own javascript library.
It's little bit dumb for now.
But soon maybe it will become a powerful tool in the hands of the frontend developers.
Or only in my hands... :)
Now better use the others normal libs like Vue or React :)

## Getting Started

1. Download or clone project copy
2. Include ramona.js to the top of your page
3. Create div with id
4. Then include js-file into bottom of the body
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <script type="text/javascript" src="ramona.js"></script>
</head>
<body>
  <div id="myAppName"></div>
  <script type="text/javascript" src="app.js"></script>
</body>
</html>
```
5. Add next code into js-file :
```
new Ramona({
  in: '#myAppName',
  static: {
    headerTitle: 'Header'
  },
  state: {
    header: true
  },
  heart() {
    var th = this; // In the future you need it for calling this context from your objects
    // all logic contains it that place
    // the way getting state - "th.state.header"
  },
  view() {
    return {
      header: `
        <header>
          <h1>${this.static.headerTitle}</h1>
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

* in - entry element of your new Ramona instance
* static - static props
* state - boolean props for watching templates state of view()
* heart() - all business heart of your component
* view() - templates

You can notice that state prop "header" are equal to view() prop and name of this tag.
**This is the only way to create a dependency of "state" and "view()".**
If you put "false" into "this.state.header" header will leave the DOM.

### Public methods and props

You can "die" your instance using same name method:
```
// Create new Ramona instance at first
var myApp = new Ramona({
  // all props and heart
})
myApp.die(); // use it anywhere if you want "kill" your instance
```
You can also use public prop if you want for instances manipulation:
```
myApp.in; // '#myAppName'
myApp.static.headerTitle; // 'Header'
```
It's all for now!

## Author

* **Ruslan Timurziyev**  - [Github](https://github.com/sawuer/)

See also the list of [contributors](https://github.com/sawuer/ramona-js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

