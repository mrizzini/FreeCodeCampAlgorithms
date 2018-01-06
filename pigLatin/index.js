// needs some serious cleaning

function translatePigLatin(str) {
	var pigLatin = "";
	var vowels = ["a", "e", "i", "o", "u"];
	var consonants = [];
	if (str[0] === vowels[0] || str[0] === vowels[1] || str[0] === vowels[3] || str[0] === vowels[4]) {
		pigLatin = str + "way";
		return pigLatin;
	} else {
		str = str.split('');
		consonants.push(str[0]);
		str.splice(0, 1);
		str = str.join('');
		pigLatin = str + consonants + "ay";
		if (str[0] === vowels[0] || str[0] === vowels[1] || str[0] === vowels[3] || str[0] === vowels[4]) {
			return pigLatin;
		}
	}
	if (str[0] !== "a" || str[0] !== "e" || str[0] !== "i" || str[0] !== "o" || str[0] !== "u") {
		str = str.split('');
		consonants.push(str[0]);
		str.splice(0, 1);
		str = str.join('');
		consonants = consonants.join("");
		return str + consonants + "ay";
	}
	return pigLatin;
}
translatePigLatin("glove");


