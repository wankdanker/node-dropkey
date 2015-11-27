dropkey
-------

From each object in an array, delete keys specified

example
-------

```js
var dk = require('dropkey');
var a = [{ item_id : 1, name : 'test1' }, { item_id : 2, name : 'test2' }]

dk(a, ['item_id']);

console.log(a);

//[{ name : 'test1' }, { name : 'test2' }]
```

api
---

### dropkey(objectArray, keyArray)

* objectArray: [Array] - an array containing objects to process
* keyArray: [Array] - an array of strings containing the keys to delete from the objects in objectArray

additional info
---------------

There's nothing magical about this. This is just a module for this small snippet of code:

```js
function dropkeys (array, dropable) {
        array.forEach(function (item) {
                dropable.forEach(function (key) {
                        delete item[key];
                });
        });
        return array;
}
```

license
-------

MIT
