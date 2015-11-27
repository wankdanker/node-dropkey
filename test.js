var dropkey = require('./');
var test = require('tape');

test('dropkey removes the keys requested from each object', function (t) {
	var a = [{ a : 1, b : 2, c : 3, d : 4 },{ a : 5, b : 6, c : 7, d : 8 },{ a : 9, b : 10, c : 11, d : 12 }];
	var b = [{ a : 1, c : 3 },{ a : 5, c : 7 },{ a : 9, c : 11 }];

	dropkey(a, ['b','d']);

	t.deepEqual(b, a);
	t.end();
});

