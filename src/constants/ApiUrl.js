const ApiUrl = {
	URL_GetUserInfoFromToken: 'https://laravel-login-site.herokuapp.com/api/user',
	URL_GetCart: 'https://web-ban-hang-server.herokuapp.com/api/cart/get',
	URL_RemoveFromCart: (id, cartId) => `https://web-ban-hang-server.herokuapp.com/api/cart/remove/user/${id}/cart/${cartId}`,
	URL_RemoveAllFromCart: (id, cartId) => `https://web-ban-hang-server.herokuapp.com/api/cart/remove/user/${id}`,
	URL_UpdateAmount: 'https://web-ban-hang-server.herokuapp.com/api/cart/amount/update',
};

export default ApiUrl;
