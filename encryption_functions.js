const crypto = require('crypto');

const ENCRYPTION_KEY = crypto.randomBytes(32);
const IV_LENGTH = 16;

/**
 * Encrypts a string of data using AES encryption.
 * 
 * @param {} words The string/data that needs to be encrypted.
 * @param {*} key The encryption key to be used to encrypt the string.
 * @returns The encryption of the data represented in hexadecimal format in a string.
 */
function encrypt(words, key)
{
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(words, 'utf8', 'hex' );

    encrypted = encrypted + cipher.final('hex');

    return (iv.toString('hex') + ': ' + encrypted);
}

/**
 * Decrypts a string of encrypted data using AES encryption.
 * 
 * @param {*} encryption The encrypted string in hexadecimal format needed to be decrypted to be readable.
 * @param {*} key The encryption key to be used to decrypt the encryption.
 * @returns The decrypted encryption in a string format.
 */
function decrypt(encryption, key)
{
    const iv = Buffer.from(encryption.slice(0, 33), 'hex');
    const encrypted = Buffer.from(encryption.slice(34), 'hex');

    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');

    decrypted = decrypted + decipher.final('utf8');

    return (decrypted);
}  

const hello = 'Beach';
console.log(hello);
const hello_encrypt = encrypt(hello, ENCRYPTION_KEY);
console.log(hello_encrypt);
const hello_decrypt = decrypt(hello_encrypt, ENCRYPTION_KEY);
console.log(hello_decrypt);
