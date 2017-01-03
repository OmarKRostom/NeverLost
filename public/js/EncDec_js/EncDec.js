
///TO USE///
var text="facebook"
var pass="1234567"
var hashedPass=hashing(pass)
encryptedArray=Encryption(text,hashedPass)
decryptedText=Decrypt(encryptedArray,hashedPass)
///////////

function hashing(plainText){
	
	return md5(plainText)
}

function Encryption(text, key){

	var textBytes = aesjs.util.convertStringToBytes(text);
	var keyBytes = aesjs.util.convertStringToBytes(key);
	var aesCtr = new aesjs.ModeOfOperation.ctr(keyBytes, new aesjs.Counter(5));
	var encryptedBytes = aesCtr.encrypt(textBytes);
	return encryptedBytes
}


function Decrypt(encryptedBytes, key){

	var keyBytes = aesjs.util.convertStringToBytes(key);
	var aesCtr = new aesjs.ModeOfOperation.ctr(keyBytes, new aesjs.Counter(5));
	var decryptedBytes = aesCtr.decrypt(encryptedBytes);
	var decryptedText = aesjs.util.convertBytesToString(decryptedBytes);
	return decryptedText
}

/*
function makeInitVector(){
    var iv = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 16; i++ )
        iv += possible.charAt(Math.floor(Math.random() * possible.length));
    return iv;
}
*/