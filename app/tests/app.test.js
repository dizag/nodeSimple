const request = require('supertest')
const app = require('../../server')
// TODO should be fixed ....

describe('Post Endpoints', () => {

	const testEntity = {
		id: 5,
		email: 'zzz@5.com',
		givenName: 'entityName_5',
		familyName: 'familyName_5',
	}

	it('should create a new entity', async () => {

		const res = await request(app)
			.post('/api/entities')
			.send(testEntity)

		expect(res.statusCode).toEqual(200);

		let response = JSON.parse(res.text);

		expect(response.status).toEqual('ok');
		expect(response.msg).toEqual('Post Successfully');
		expect(response.newEntity.email).toEqual(testEntity.email);
		expect(response.newEntity.givenName).toEqual(testEntity.givenName);
		expect(response.newEntity.familyName).toEqual(testEntity.familyName);

	})

	it('should get entity Id : 4', async () => {

		const res = await request(app)
			.get('/api/entities/4')

		console.log(JSON.stringify(res.body));
		expect(res.statusCode).toEqual(200);
		expect(res.text).toEqual("Get a entity:\n" + JSON.stringify({
			id: 4,
			email: 'zzz@4.com',
			givenName: 'entityName_4',
			familyName: 'familyName_4',
			created: '2021-10-12T10:18:52.651Z'
		}, null, 4));

	})
})

