# Ramona Js 
Ramona Js - simple js library for creating useful frontend components which have own **static porps, states, views, and logic.**
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
  ENTRY: '#myAppName',
  STATIC: {
    headerTitle: 'Header'
  },
  STATES: {
    header: true
  },
  logic() {
    var th = this; // In the future you need it for calling this context from your objects
    // all logic contains it that place
    // the way getting states - "th.STATES.header"
  },
  VIEW() {
    return {
      header: `
        <header>
          <h1>${this.STATIC.headerTitle}</h1>
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

* ENTRY - entry element of your new Ramona instance
* STATIC - static props
* STATES - boolean props for watching templates states of VIEW()
* LOGIC() - all business logic of your component
* VIEW() - templates

You can notice that STATES prop "header" are equal to VIEW() prop and name of this tag.
**This is the only way to create a dependency of "STATES" and "VIEW()".**
If you put "false" into "this.STATES.header" header will leave the DOM.

### Public methods and props

You can "die" your instance using same name method:
```
// at first create new Ramona instance
var myApp = new Ramona({
  // all props and logic
})
myApp.die(); // use it anywhere if you want "kill" your instance
```
You can also use public prop if you want for instances manipulation:
```
myApp.ENTRY; // '#myAppName'
myApp.STATIC.headerTitle; // 'Header'
```
It's all for now!

## Author

* **Ruslan Timurziyev**  - [Github](https://github.com/sawuer/)

See also the list of [contributors](https://github.com/sawuer/ramona-js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

