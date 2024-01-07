import { randomBytes } from 'node:crypto';
import { sha512 } from './helpers.js';
/**
 * Encrypt a plain text password with the Ldap sha512crypt algorithm.
 *
 * @param {string} textPassword - Plain text password.
 * @param {string} salt - Salt used to hash the password (it can't be greater than 16 characters).
 * @returns {string} - Encrypted password with the Ldap sha512crypt algorithm.
 *
 * @throws {Error} If salt length is greater than 16.
 *
 * @example
 * const encryptedPassword = sha512Crypt('mySuperSecretPassword')
 * // return {CRYPT}$6$NQgPVC0up/oNVCb4$Aduz92Zfo/PFDE/XhvA3QmSqHquqdNiCdZvc9N5/UTpEUepMdd/6Mq/TeoM07wvyxHpg8ELGVzTWZt2e7Z9LY/
 */
export function sha512Crypt(textPassword, salt = '') {
    if (!salt)
        salt = randomBytes(16).toString('base64').substring(0, 16);
    if (salt.length > 16)
        throw new Error('The maximum length of salt is 16 characters');
    return sha512(textPassword, salt);
}
/**
 * Verify passwords encrypted with sha512.
 *
 * @param {string} textPassword - Plain text password.
 * @param {string | string[]} sha512Password - String or Array of strings to be compared to the plain text password.
 *
 * @example
 * const isValid = verifySha512('mySuperSecretPassword', arrayOfSha512Passwords)
 * // return true or false
 */
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
/**
 * Encrypt a plain text password with the Ldap sha512crypt algorithm.
 *
 * @param {string} textPassword - Plain text password.
 * @param {string} salt - Salt used to hash the password (it can't be greater than 16 characters).
 * @returns {string} - Encrypted password with the Ldap sha512crypt algorithm.
 *
 * @throws {Error} If salt length is greater than 16.
 *
 * @example
 * const encryptedPassword = await sha512CryptAsync('mySuperSecretPassword')
 * // return Promise that resolves to => {CRYPT}$6$NQgPVC0up/oNVCb4$Aduz92Zfo/PFDE/XhvA3QmSqHquqdNiCdZvc9N5/UTpEUepMdd/6Mq/TeoM07wvyxHpg8ELGVzTWZt2e7Z9LY/
 */
export function sha512CryptAsync(textPassword, salt = '') {
    return new Promise((resolve, reject) => {
        if (!salt)
            salt = randomBytes(16).toString('base64').substring(0, 16);
        if (salt.length > 16)
            return reject(new Error('The maximum length of salt is 16 characters'));
        resolve(sha512(textPassword, salt));
    });
}
/**
 * Verify passwords encrypted with sha512.
 *
 * @param {string} textPassword - Plain text password.
 * @param {string | string[]} sha512Password - String or Array of strings to be compared to the plain text password.
 *
 * @example
 * const isValid = await verifySha512Async('mySuperSecretPassword', arrayOfSha512Passwords)
 * // return Promise that resolves to => true or false
 */
export function verifySha512Async(textPassword, sha512Password) {
    return new Promise((resolve) => {
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
        return resolve(isValid);
    });
}
//# sourceMappingURL=index.js.map