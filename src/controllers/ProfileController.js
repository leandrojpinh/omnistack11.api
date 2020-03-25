const connection = require('../database/connection');

module.exports = {
    async list(req, res) {
        const ong_id = req.headers.authorization;

        const list = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');
            
        return res.json(list);
    }
}