const generateUniqueId = require('../../src/util/generateUniqueId');

describe('Genarete Unique ID', () => {
    it('should genarate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});