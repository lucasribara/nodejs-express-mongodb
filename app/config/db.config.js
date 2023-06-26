const secrets = require('../../secrets');

module.exports = {    
    url: `mongodb+srv://mongotut:${secrets.MONGO_DB_PASSWORD}@cluster0.gxoueaa.mongodb.net/TutorialDB?retryWrites=true&w=majority`
}