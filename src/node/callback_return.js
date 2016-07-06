
function rollback(callback) {
	callback({name: 'rollback failed'})
}

function update(callback) {
	if (true) {
		rollback(function(err) {
			if (err) {
				callback(err);
				return;
			}
			callback({name: 'rollback OK'})
			return;
		});
		callback({name: 'update failed'});
	}
	callback(null, 2);
}

update(function(err, result) {
	console.log(err, result);
})
