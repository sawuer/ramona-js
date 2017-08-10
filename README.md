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
* entry - entry element for component
* data - all data of component
* state - boolean props for watching states of view() templates
* logic() - all business logic of your component
* view() - templates

## Author

* **Ruslan Timurziyev**  - [Github](https://github.com/sawuer/)

See also the list of [contributors](https://github.com/sawuer/ramona-js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

