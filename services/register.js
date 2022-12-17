let {Users} = require("../models/users");



module.exports = {
    async registerUser(data) {
        try {
         let joe = await Users.query().insertGraph(data)
         return joe
        }
        catch(err) {
            return err
        }

    }

    
}