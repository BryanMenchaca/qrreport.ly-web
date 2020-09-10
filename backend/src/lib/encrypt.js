const bcrypt = require('bcrypt');

module.exports = {
    encryptPassword: async (password) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    },
    matchPassword: async (password, savedPassword) => {
        const result = await bcrypt.compare(password, savedPassword);
        if (result) {
            return result;
        }
    }
}