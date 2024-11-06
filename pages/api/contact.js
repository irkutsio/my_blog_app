import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (!email || !email.includes('@') || !name || !name.trim() || !message) {
			res.status(422).json({ massage: 'invalid input' });
			return;
		}

		const newMessage = {
			name,
			email,
			message,
		};

		let client;

		try {
			client = await MongoClient.connect(
				'mongodb+srv://kutsevoliryna18:YFU5X1GHYsM4ag6b@cluster0.njrvc.mongodb.net/'
			);
		} catch (error) {
			res.status(505).json({ massage: 'Could not connect to db' });
			return;
		}

		const db = client.db();

		try {
			const result = await db.collection('massages').insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: 'Storing fauled' });
			return;
		}

		client.close();
		res.status(201).json({ massage: 'Successfully store!' });
	}
};

export default handler;
