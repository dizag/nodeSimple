let entities = {
	entity1: {
		id: 1,
		email: 'zzz@1.com',
		givenName: 'entityName_1',
		familyName: 'familyName_1',
		created: '2021-10-12T10:18:52.651Z',
		completed: false,
		title: "delectus aut autem",
		userId: 1
	},
	entity2: {
		id: 2,
		email: 'zzz@2.com',
		givenName: 'entityName_2',
		familyName: 'familyName_2',
		created: '2021-10-12T10:18:52.651Z',
		completed: false,
		title: "delectus aut autem",
		userId: 1
	},
	entity3: {
		id: 3,
		email: 'zzz@3.com',
		givenName: 'entityName_3',
		familyName: 'familyName_3',
		created: '2021-10-12T10:18:52.651Z',
		completed: false,
		title: "delectus aut autem",
		userId: 1
	},
	entity4: {
		id: 4,
		email: 'zzz@4.com',
		givenName: 'entityName_4',
		familyName: 'familyName_4',
		created: '2021-10-12T10:18:52.651Z',
		completed: false,
		title: "delectus aut autem",
		userId: 1
	}
}

exports.create = function(req, res) {

	let newEntity = req.body;

	newEntity.created = new Date();

	entities[`entity${newEntity.id}`] = newEntity;

	console.log("After Post, list of Entities:\n" + JSON.stringify(entities, null, 4));
    res.end(JSON.stringify({status: 'ok', msg: 'Post Successfully', newEntity}, null, 4));
};

exports.getAll = function(req, res) {

    console.log("Get All: \n" + JSON.stringify(entities, null, 4));
    res.end("All entities: \n" + JSON.stringify(entities, null, 4));
};

exports.getById = function(req, res) {

	const entity = entities[`entity${req.params.id}`];

    console.log("Get entity: \n" + JSON.stringify(entity, null, 4));
    res.end( "Get a entity:\n" + JSON.stringify(entity, null, 4));
};

exports.updateById = function(req, res) {

	const id = parseInt(req.params.id);
	const identity =  `entity${id}`;
	const updatedEntity = req.body;

	if(entities[identity] != null){

		// update data
		entities[identity] = updatedEntity;

		console.log("Update Successfully, entities: \n" + JSON.stringify(entities, null, 4))
		
		res.end("Update Successfully! \n" + JSON.stringify(updatedEntity, null, 4));
	}else{
		res.end("Don't Exist Entity:\n:" + JSON.stringify(updatedEntity, null, 4));
	}
};

exports.deleteById = function(req, res) {

	const identity =  `entity${req.params.id}`;
	const deleteEntity = entities[identity];
    delete entities[identity];

    console.log("After deletion, entity list:\n" + JSON.stringify(entities, null, 4) );
    res.end( "Deleted entity: \n" + JSON.stringify(deleteEntity, null, 4));
};