import { randomBytes } from 'node:crypto';
import _ from './helpers.js';
export function sha512Crypt(textPassword, salt = '') {
    if (!salt)
        salt = randomBytes(16).toString('base64').substring(0, 16);
    if (salt.length > 16)
        throw new Error('The maximum length of salt is 16 characters');
    return _(textPassword, salt);
}
export function verifySha512(textPassword, sha512Password) {
    let isValid = false;
    const sha512Passwords = typeof sha512Password === 'string' ? [sha512Password] : sha512Password;
    for (const cryptPasswd of sha512Passwords) {
        const hashType = cryptPasswd.match(/\{([^}]+)\}/);
        if (hashType && hashType[1] === 'CRYPT') {
            const salt = cryptPasswd.split('$')[2];
            const hashedPassword = sha512Crypt(textPassword, salt);
            if (hashedPassword === cryptPasswd)
                isValid = true;
        }
    }
    return isValid;
}
//# sourceMappingURL=index.js.map