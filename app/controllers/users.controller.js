let users = {
	user1: {
		id: 1,
		email: 'zzz@1.com',
		givenName: 'userName_1',
		familyName: 'familyName_1',
		created: '2021-10-12T10:18:52.651Z'
	},
	user2: {
		id: 2,
		email: 'zzz@2.com',
		givenName: 'userName_2',
		familyName: 'familyName_2',
		created: '2021-10-12T10:18:52.651Z'
	},
	user3: {
		id: 3,
		email: 'zzz@3.com',
		givenName: 'userName_3',
		familyName: 'familyName_3',
		created: '2021-10-12T10:18:52.651Z'
	},
	user4: {
		id: 4,
		email: 'zzz@4.com',
		givenName: 'userName_4',
		familyName: 'familyName_4',
		created: '2021-10-12T10:18:52.651Z'
	}
}

exports.create = function(req, res) {

	let newUser = req.body;

	newUser.created = new Date();

	users[`user${newUser.id}`] = newUser;

	console.log("After Post, list of Users:\n" + JSON.stringify(users, null, 4));
    res.end(JSON.stringify({status: 'ok', msg: 'Post Successfully', newUser}, null, 4));
};

exports.getAll = function(req, res) {

    console.log("Get All: \n" + JSON.stringify(users, null, 4));
    res.end("All Users: \n" + JSON.stringify(users, null, 4));
};

exports.getById = function(req, res) {

	const user = users[`user${req.params.id}`];

    console.log("Get user: \n" + JSON.stringify(user, null, 4));
    res.end( "Get a user:\n" + JSON.stringify(user, null, 4));
};

exports.updateById = function(req, res) {

	const id = parseInt(req.params.id);
	const identity =  `user${id}`;
	const updatedUser = req.body;

	if(users[identity] != null){

		// update data
		users[identity] = updatedUser;

		console.log("--->Update Successfully, users: \n" + JSON.stringify(users, null, 4))
		
		res.end("Update Successfully! \n" + JSON.stringify(updatedUser, null, 4));
	}else{
		res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedUser, null, 4));
	}
};

exports.deleteById = function(req, res) {

	const identity =  `user${req.params.id}`;
	const deleteUser = users[identity];
    delete users[identity];

    console.log("--->After deletion, user list:\n" + JSON.stringify(users, null, 4) );
    res.end( "Deleted user: \n" + JSON.stringify(deleteUser, null, 4));
};