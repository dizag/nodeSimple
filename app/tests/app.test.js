const request = require('supertest')
const app = require('../../server')


describe('Post Endpoints', () => {

	const testUser = {
		id: 5,
		email: 'zzz@5.com',
		givenName: 'userName_5',
		familyName: 'familyName_5',
	}

	it('should create a new user', async () => {

		const res = await request(app)
			.post('/api/users')
			.send(testUser)

		expect(res.statusCode).toEqual(200);

		let response = JSON.parse(res.text);

		expect(response.status).toEqual('ok');
		expect(response.msg).toEqual('Post Successfully');
		expect(response.newUser.email).toEqual(testUser.email);
		expect(response.newUser.givenName).toEqual(testUser.givenName);
		expect(response.newUser.familyName).toEqual(testUser.familyName);

	})

	it('should get user Id : 4', async () => {

		const res = await request(app)
			.get('/api/users/4')

		console.log(JSON.stringify(res.body));
		expect(res.statusCode).toEqual(200);
		expect(res.text).toEqual("Get a user:\n" + JSON.stringify({
			id: 4,
			email: 'zzz@4.com',
			givenName: 'userName_4',
			familyName: 'familyName_4',
			created: '2021-10-12T10:18:52.651Z'
		}, null, 4));

	})
})

