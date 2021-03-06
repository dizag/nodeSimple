let entities = {
	'cb1cb873-0a46-41d6-affc-a1ed41955fbf': {
		uuid: 'cb1cb873-0a46-41d6-affc-a1ed41955fbf',
		id: 1,
		userId: 1,
		givenName: 'entityName_1',
		familyName: 'familyName_1',
		title: "delectus aut autem 1",
		completed: false,
		email: 'zzz@1.com',
		created: '2021-10-12T10:18:52.651Z'
	},
	'01e3021c-cd5c-4d3f-b39a-6b2dd3f706ba': {
		uuid: '01e3021c-cd5c-4d3f-b39a-6b2dd3f706ba',
		id: 2,
		userId: 1,
		givenName: 'entityName_2',
		familyName: 'familyName_2',
		title: "delectus aut autem 2",
		completed: false,
		email: 'zzz@2.com',
		created: '2021-10-12T10:18:52.651Z'
	},
	'1d76a4b0-6887-43cc-97b3-8229c05b1fa1': {
		uuid: '1d76a4b0-6887-43cc-97b3-8229c05b1fa1',
		id: 3,
		userId: 1,
		givenName: 'entityName_3',
		familyName: 'familyName_3',
		title: "delectus aut autem 3",
		completed: false,
		email: 'zzz@3.com',
		created: '2021-10-12T10:18:52.651Z'
	},
	'1d76a4b0-6888-43cc-97b3-8229c05b1fa9': {
		uuid: '1d76a4b0-6888-43cc-97b3-8229c05b1fa9',
		id: 4,
		userId: 1,
		givenName: 'entityName_4',
		familyName: 'familyName_4',
		title: "delectus aut autem 4",
		completed: false,
		email: 'zzz@4.com',
		created: '2021-10-12T10:18:52.651Z'
	}
}

exports.create = function(req, res) {

	let data = req.body;

	let uuid = createUUID();

	data.uuid = uuid;
	data.created = new Date();
	data.id = Math.max.apply(Math, Object.values(entities).map(function(entity) { return entity.id; })) + 1;
	data.userId = 1;


	entities[uuid] = data;

	console.log("After Post, list of Entities:\n" + JSON.stringify(entities, null, 4));
    res.end(JSON.stringify({status: 'ok', msg: 'Post Successfully', data}, null, 4));
};

exports.getAll = function(req, res) {

    console.log("Get All: \n" + JSON.stringify(entities, null, 4));
    res.end(JSON.stringify(entities, null, 4));
};

exports.getByUUID = function(req, res) {

	const data = entities[req.params.uuid];

    console.log("Get entity: \n" + JSON.stringify(data, null, 4));
	res.end(JSON.stringify({status: 'ok', msg: 'Get a entity Successfully!', data}, null, 4));
};

exports.updateByUUID = function(req, res) {

	const uuid = req.params.uuid;
	const data = req.body;

	if(entities[uuid] != null){

		// update data
		entities[uuid] = data;		
		res.end(JSON.stringify({status: 'ok', msg: 'Update Successfully!', data}, null, 4));

	}else{
		res.end("Don't Exist Entity:\n:" + JSON.stringify(data, null, 4));
	}
};

exports.deleteByUUID = function(req, res) {

	const data = entities[req.params.uuid];
    delete entities[req.params.uuid];

    console.log("After deletion, entity list:\n" + JSON.stringify(entities, null, 4) );
	res.end(JSON.stringify({status: 'ok', msg: 'Deleted entity Successfully!', data}, null, 4));

};

const createUUID = () =>  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	return v.toString(16);
});