import { expect, it } from 'vitest'
import { sha512Crypt, sha512CryptAsync, verifySha512, verifySha512Async } from '../src/index'

const password = 'mySuperSecretPassword'
const salt = 'myDopeCustomSalt'
const encryptedPass = '{CRYPT}$6$myDopeCustomSalt$4ENRn.vwcs09z0fjr6Jt3NMOFVkn.p9v7ilDcK/CwRnQm48Y5HawkiGivh4gBTLwSY4SQNfCAe05E1nCTpZ0u.'
const anotherEncryptedPass = '{CRYPT}$6$myDopeCustomSalt$D4JKgzmZmNroxjTQyA2MAsNvWvfxGCKVLzL1aGO0UMD24HGPiKvoZO0r899u.keezGsMdod3XSbXyOSFJv32Z1'

it('should return a string when not adding a salt', () => {
	const returnedPass = sha512Crypt(password)
	expect(returnedPass).toBeTypeOf('string')
})

it('should return a string when adding a salt', () => {
	const returnedPass = sha512Crypt(password, salt)
	expect(returnedPass).toBeTypeOf('string')
})

it('should return a string equals to the encrypted password', () => {
	const returnedPass = sha512Crypt(password, salt)
	expect(returnedPass).toBe(encryptedPass)
})

it('should return a error when adding a salt larger than 16 chars', () => {
	expect(() => sha512Crypt(password, 'saltLargerThan16Chars')).toThrowError(/^The maximum length of salt is 16 characters$/)
})

it('should return true', () => {
	const returnedVerification = verifySha512(password, encryptedPass)
	expect(returnedVerification).toBe(true)
})

it('should return false', () => {
	const returnedVerification = verifySha512(password, anotherEncryptedPass)
	expect(returnedVerification).toBe(false)
})

it('async - should return a string when not adding a salt', () => {
	const returnedPass = sha512CryptAsync(password)
	expect(returnedPass).resolves.toBeTypeOf('string')
})

it('async - should return a string when adding a salt', () => {
	const returnedPass = sha512CryptAsync(password, salt)
	expect(returnedPass).resolves.toBeTypeOf('string')
})

it('async - should return a string equals to the encrypted password', () => {
	const returnedPass = sha512CryptAsync(password, salt)
	expect(returnedPass).resolves.toBe(encryptedPass)
})

it('async - should return a error when adding a salt larger than 16 chars', () => {
	const returnedPass = sha512CryptAsync(password, 'saltLargerThan16Chars')
	expect(returnedPass).rejects.toThrowError(/^The maximum length of salt is 16 characters$/)
})

it('async - should return true', () => {
	const returnedVerification = verifySha512Async(password, encryptedPass)
	expect(returnedVerification).resolves.toBe(true)
})

it('async - should return false', () => {
	const returnedVerification = verifySha512Async(password, anotherEncryptedPass)
	expect(returnedVerification).resolves.toBe(false)
})
