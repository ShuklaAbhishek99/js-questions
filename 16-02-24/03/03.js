export const reverseAString = (str) => {
	let ans = "";

	if(str){
		for(let i = str.length-1; i>=0; i--){
			ans += str[i];
		}
	}

	return ans;
}
