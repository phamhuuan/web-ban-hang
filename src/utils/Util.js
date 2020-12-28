export const formatCurrency = (num: string, currency = '') => {
	if(!num){
		if(num === 0){
			return 0 + currency;
		}
		return ;
	}
	if(num.length === 2){
		if(num === "00"){
			num =	num.replace("00", "0");
		}
	}
	if(num.length > 1){
		let first = num.substring(0, 1);
		if(first === "0"){
			num = num.substring(1, num.length);
		}
	}
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + currency;
}

export const calculateCartValue = (cart) => {
	let sum = 0;
	cart.forEach((item) => {
		sum += item.value * item.amount;
	})
	return sum;
};

export const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export const validatePhoneNumber = (phoneNumber) => {
	const re = /((09|03|07|08|05)+([0-9]{8})\b)/g;
	return re.test(phoneNumber);
}