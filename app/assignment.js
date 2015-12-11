var module = module || {};

function getText() {
var text = document.getElementById("text").value;
console.log("text:", text);
};

function checkWordCount(text) {
	if (text.split(' ').length < 100) {
		return true;
	} else {
		return false;
	}
}

function duplicateCheck(text) {
    for (var i = 0; i < text.length; i++) {
        for (var j = 0; j < text.length; j++) {
            if (i != j) {
                if (text[i] == text[j]) {
                        return false; 
                }
            }
        }
    }
    return true; 
}

function verifyAlphaNumeric(text) {
	if (/^[a-z0-9]+$/i) {
		return false;
	} else {
		return true;
	}
	
}







module.exports = { checkWordCount, duplicateCheck, verifyAlphaNumeric };