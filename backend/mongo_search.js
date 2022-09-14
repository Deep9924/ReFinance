const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_MONGO);
client.connect();
require("dotenv").config();

const db = client.db("Refinance").collection("Refinance_Stock");

const mongo_db = async (searchData) => {
	try {
		if (searchData) {
			const result = await db
				/* .db("Refinance")
				.collection("Refinance_Stock") */
				.aggregate([
					{
						$search: {
							index: "forSearch",
							compound: {
								must: [
									{
										text: {
											query: searchData,
											path: ["symbol", "description"],
											fuzzy: {
												maxEdits: 2,
												prefixLength: 4,
											},
										},
									},
								],
							},
						},
					},
					{
						$limit: 10,
					},
					{
						$project: {
							symbol: 1,
							description: 1,
						},
					},
				])
				.toArray();
			// score: { $meta: "searchScore"} to check the score
			return result;
		}
	} catch (error) {
		console.error(error);
		return error;
	}
};
module.exports = mongo_db;
