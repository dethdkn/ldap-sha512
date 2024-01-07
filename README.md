<h1 align="center">Ldap-sha512</h1>
<p align="center">Ldap sha512-crypt password generator for node</p>
<p align="center">
   <a href="https://www.npmjs.com/package/ldap-sha512">
      <img src="https://img.shields.io/npm/dt/ldap-sha512?color=%23c12127&label=downloads&logo=npm" alt="npm"/>
   </a>
   <a href="https://github.com/dethdkn/ldap-sha512/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/dethdkn/ldap-sha512?color=%233da639&logo=open%20source%20initiative" alt="License"/>
  </a>
   <a href="https://gitmoji.dev">
      <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67" alt="Gitmoji"/>
   </a>
   <a href="https://rosa.dev.br">
      <img src="https://img.shields.io/badge/check me!-👻-F28AA9" alt="rosa.dev.br"/>
   </a>
</p>

## ✨ Features

- Encrypt a plain text password with the Ldap sha512crypt algorithm.
- Verify passwords encrypted with sha512.
- No external dependencies.

## 🚀 Setup

1. Install with your favorite package manager:
   - **pnpm** : `pnpm i ldap-sha512`
   - npm : `npm i ldap-sha512`
   - yarn : `yarn add ldap-sha512`
   - bun : `bun add ldap-sha512`

2. Import the function into your project:
```ts
import { sha512Crypt, sha512CryptAsync, verifySha512, verifySha512Async } from 'ldap-sha512'
```

## ⚡️ Usage

1. Encrypt a plain text password using sha512 and a random salt:
```ts
const encryptedPassword = sha512Crypt('mySuperSecretPassword')
// return {CRYPT}$6$NQgPVC0up/oNVCb4$Aduz92Zfo/PFDE/XhvA3QmSqHquqdNiCdZvc9N5/UTpEUepMdd/6Mq/TeoM07wvyxHpg8ELGVzTWZt2e7Z9LY/

// OR

const encryptedPassword = await sha512CryptAsync('mySuperSecretPassword')
// return Promise that resolves to => {CRYPT}$6$NQgPVC0up/oNVCb4$Aduz92Zfo/PFDE/XhvA3QmSqHquqdNiCdZvc9N5/UTpEUepMdd/6Mq/TeoM07wvyxHpg8ELGVzTWZt2e7Z9LY/
```

2. Encrypt a plain text password using sha512 and a custom salt:\
**The maximum length of salt is 16 characters**
```ts
const encryptedPassword = sha512Crypt('mySuperSecretPassword', 'myDopeCustomSalt')
// return {CRYPT}$6$myDopeCustomSalt$4ENRn.vwcs09z0fjr6Jt3NMOFVkn.p9v7ilDcK/CwRnQm48Y5HawkiGivh4gBTLwSY4SQNfCAe05E1nCTpZ0u.

// OR

const encryptedPassword = await sha512CryptAsync('mySuperSecretPassword', 'myDopeCustomSalt')
// return Promise that resolves to => {CRYPT}$6$myDopeCustomSalt$4ENRn.vwcs09z0fjr6Jt3NMOFVkn.p9v7ilDcK/CwRnQm48Y5HawkiGivh4gBTLwSY4SQNfCAe05E1nCTpZ0u.
```

3. Validate your plain text password with a sha512 encrypted password:\
**The sha512 password can be either a single string or an array of strings. The plain text password will be compared to each sha512 password and the function will return true if any of them matches**
```ts
const isValid = verifySha512('mySuperSecretPassword', arrayOfSha512Passwords)
// return true or false

// OR

const isValid = await verifySha512Async('mySuperSecretPassword', arrayOfSha512Passwords)
// return Promise that resolves to => true or false
```

## 📝 License

Copyright © 2024 [Gabriel 'DethDKN' Rosa](https://github.com/dethdkn)\
This project is under [MIT license](https://github.com/dethdkn/ldap-sha512/blob/main/LICENSE)
