let {Docs} = require("../models/docs");



module.exports = {
    async create(data) {
    try {
        let doc = await Docs.query().insertGraph(data);
        return doc;
    }
    catch (e) {
        throw new Error(e);
    }
    },

    async getAll() {
        try {
            let docs = await Docs.query();
            return docs;
        }
        catch (e) {
            throw new Error(e);
        }
    },

    async getByOwderID(id) {
        try {
            let docs = await Docs.query().where("owner_id", id);
            return docs;
        }
        catch (e) {
            throw new Error(e);
        }
    }
}