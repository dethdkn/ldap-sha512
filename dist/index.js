import { randomBytes } from 'node:crypto';
import { sha512 } from './helpers.js';
export function sha512Crypt(textPassword, salt = '') {
    return new Promise((resolve, reject) => {
        if (!salt)
            salt = randomBytes(16).toString('base64').substring(0, 16);
        if (salt.length > 16)
            return reject('The maximum length of salt is 16 characters');
        resolve(sha512(textPassword, salt));
    });
}
export function verifySha512(textPassword, sha512Password) {
    return new Promise((resolve) => {
        let valid = false;
        const sha512Passwords = typeof sha512Password === 'string' ? [sha512Password] : sha512Password;
        sha512Passwords.forEach(async (cryptPasswd, index) => {
            const hashType = cryptPasswd.match(/\{([^}]+)\}/);
            if (hashType && hashType[1] === 'CRYPT') {
                const salt = cryptPasswd.split('$')[2];
                const hashedPassword = await sha512Crypt(textPassword, salt);
                if (hashedPassword === cryptPasswd)
                    valid = true;
            }
            if (index === sha512Passwords.length - 1)
                return resolve(valid);
        });
    });
}
//# sourceMappingURL=index.js.map