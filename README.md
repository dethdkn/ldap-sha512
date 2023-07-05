<h1 align="center">Ldap-sha512</h1>
<p align="center">Ldap sha512-crypt password generator for node</p>

## ✨ Features

- Encrypt a plain text password with the Ldap sha512crypt algorithm.
- Verify passwords encrypted with sha512.
- No external dependencies.

## 🚀 SETUP

1. Install with your favorite package manager:
   - **pnpm** : `pnpm i ldap-sha512`
   - npm : `npm i ldap-sha512`
   - yarn : `yarn add ldap-sha512`

2. Import the function into your project:
```ts
import { sha512Crypt, verifySha512 } from 'ldap-sha512'
```

## ⚡️ USAGE

1. Encrypt a plain text password using sha512 and a random salt:
```ts
const encryptedPassword = await sha512Crypt('mySuperSecretPassword')
// return {CRYPT}$6$NQgPVC0up/oNVCb4$Aduz92Zfo/PFDE/XhvA3QmSqHquqdNiCdZvc9N5/UTpEUepMdd/6Mq/TeoM07wvyxHpg8ELGVzTWZt2e7Z9LY/
```

2. Encrypt a plain text password using sha512 and a custom salt:\
**The maximum length of salt is 16 characters**
```ts
const encryptedPassword = await sha512Crypt('mySuperSecretPassword', 'myDopeCustomSalt')
// return {CRYPT}$6$myDopeCustomSalt$4ENRn.vwcs09z0fjr6Jt3NMOFVkn.p9v7ilDcK/CwRnQm48Y5HawkiGivh4gBTLwSY4SQNfCAe05E1nCTpZ0u.
```

3. Validate your plain text password with a sha512 encrypted password:\
**The sha512 password can be either a single string or an array of strings. The plain text password will be compared to each sha512 password and the function will return true if any of them matches**
```ts
const isValid = await verifySha512('mySuperSecretPassword', arrayOfSha512Passwords)
// return true or false
```

## 📝 License

Copyright © 2023 [Gabriel 'DethDKN' Rosa](https://github.com/dethdkn)\
This project is under [MIT license](https://github.com/dethdkn/ldap-sha512/blob/main/LICENSE)