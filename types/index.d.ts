/**
 * @function
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
 *
 * // OR
 *
 * const encryptedPassword = sha512Crypt('mySuperSecretPassword', 'myDopeCustomSalt')
 * // return {CRYPT}$6$myDopeCustomSalt$4ENRn.vwcs09z0fjr6Jt3NMOFVkn.p9v7ilDcK/CwRnQm48Y5HawkiGivh4gBTLwSY4SQNfCAe05E1nCTpZ0u.
 */
export declare function sha512Crypt(textPassword: string, salt?: string): string

/**
 * @function
 * Verify passwords encrypted with sha512.
 *
 * @param {string} textPassword - Plain text password.
 * @param {string | string[]} sha512Password - String or Array of strings to be compared to the plain text password.
 *
 * @example
 * const isValid = verifySha512('mySuperSecretPassword', arrayOfSha512Passwords)
 * // return true or false
 */
export declare function verifySha512(textPassword: string, sha512Password: string | string[]): boolean
