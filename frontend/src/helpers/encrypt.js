
const key = 'mysecretkey'

// Функция шифрования по ключу
export function encrypt(data) {
    let result = '';
    for (let i = 0; i < data.length; i++) {
        result += String.fromCharCode(key.charCodeAt(i % key.length) ^ data.charCodeAt(i));
    }
    return btoa(result);
}

// Функция дешифровки по ключу
export function decrypt(data) {
    data = atob(data);
    let result = '';
    for (let i = 0; i < data.length; i++) {
        result += String.fromCharCode(key.charCodeAt(i % key.length) ^ data.charCodeAt(i));
    }
    return result;
}