
/* using  */

//input from the user
var userName="TextMustBe16ByteYEHIAARAFA1212122284847191"
var masterPass="1234567"

//This with the signing up <each user has his own iv>
var ivBytes=aesjs.util.convertStringToBytes(makeInitVector());

//The key 
var key=hashing(masterPass)

//encryption
var encryptedBytes=Encrypt(userName,key,ivBytes)

//decryption
var decryptedText=Decrypt(encryptedBytes,key,ivBytes)

console.log(decryptedText)



function hashing(plainText){
	return md5(plainText)
}



function Encrypt(text,key,ivBytes){

	var textBytes = aesjs.util.convertStringToBytes(text);
	var keyBytes = aesjs.util.convertStringToBytes(key);
	var encyptedArrayOfBytes=[]
	var i,j,temp,chunk=16;
	for (i=0,j=textBytes.length; i<j; i+=chunk) {
	    temp = textBytes.slice(i,i+chunk);
	    if (temp.length<16){
	    	for(var m=temp.length;m<16;m++){
	    		temp[m]=0
	    	}
	    }
	   var enc=Encryption(temp,keyBytes,ivBytes)
	   for (var n=0;n<enc.length;n++){
	   	encyptedArrayOfBytes.push(enc[n])
	   }
	}
	return encyptedArrayOfBytes
}

function Decrypt(encryptedBytes, key, ivBytes){

	var keyBytes = aesjs.util.convertStringToBytes(key);
	var decryptedArrayOfBytes=[]
	var i,j,temp,chunk=16;
	for (i=0,j=encryptedBytes.length; i<j; i+=chunk) {
		temp = encryptedBytes.slice(i,i+chunk);
		var dec=Decryption(temp,keyBytes,ivBytes)	
		for (var n=0;n<dec.length;n++){
		   	decryptedArrayOfBytes.push(dec[n])
		   }
	}
	var decryptedText = aesjs.util.convertBytesToString(decryptedArrayOfBytes);
	return decryptedText
}


function makeInitVector(){
    var iv = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 16; i++ )
        iv += possible.charAt(Math.floor(Math.random() * possible.length));
    return iv;
}


function Encryption(textBytes, keyBytes, ivBytes){
	
	
	var aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, ivBytes);
	var encryptedBytes = aesCbc.encrypt(textBytes)
	return encryptedBytes
}

function Decryption(encryptedBytes, keyBytes, ivBytes){
	
	var aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, ivBytes);
	var decryptedBytes = aesCbc.decrypt(encryptedBytes);
	return decryptedBytes
}



