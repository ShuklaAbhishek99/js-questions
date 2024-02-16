export const countVowels = (str) => {
	const arr = ['a', 'e', 'i', 'o', 'u'];
	let ans = 0;

	for(let i = 0; i<str.length; i++){
		if(arr.includes(str[i].toLowerCase())){
			ans++;
		}
	}

	return ans;
}
