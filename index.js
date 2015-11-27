module.exports = dropkeys;

function dropkeys (array, dropable) {
	array.forEach(function (item) {
		dropable.forEach(function (key) {
			delete item[key];
		});
	});

	return array;
};
