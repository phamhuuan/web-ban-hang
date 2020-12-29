import React, {useCallback, useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {handleDeleteRequest, handlePostRequest, handlePutRequest} from '../../api/api';
import Loading from '../../common/components/Loading';
import ApiUrl from '../../constants/ApiUrl';
import Cart from './components';

const CartContainer = () => {
	const location = useLocation();
	const history = useHistory();
	const [cart, setCart] = useState([]);

	const getCart = useCallback(async (userId) => {
		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			timeout: 10000,
		};
		const response = await handlePostRequest(ApiUrl.URL_GetCart, config, {userId});
		if (response && response.status === 200) {
			sessionStorage.setItem('cart', JSON.stringify(response.data.result));
			setCart(response.data.result);
			history.push(location.pathname);
		} else {
			getCart(userId);
		}
	}, [history, location.pathname]);

	const removeFromCart = async (index) => {
		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			timeout: 10000,
		};
		const response = await handleDeleteRequest(ApiUrl.URL_RemoveFromCart(JSON.parse(sessionStorage.getItem('user')).id, cart[index]._id), config);
		if (response && response.status === 200) {
			cart.splice(index, 1);
			setCart([...cart]);
		}
	};

	const removeAllFromCart = async () => {
		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			timeout: 10000,
		};
		const response = await handleDeleteRequest(ApiUrl.URL_RemoveAllFromCart(JSON.parse(sessionStorage.getItem('user')).id), config);
		if (response && response.status === 200) {
			setCart([]);
		}
	};

	const updateCartAmount = async (cartId, amount) => {
		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			timeout: 10000,
		};
		const response = await handlePutRequest(ApiUrl.URL_UpdateAmount, config, {id: JSON.parse(sessionStorage.getItem('user')).id, cartId, amount});
		if (response && response.status === 200) {}
	};

	const minusOne = (index) => {
		cart[index].amount--;
		updateCartAmount(cart[index]._id, cart[index].amount);
		sessionStorage.setItem('cart', JSON.stringify(cart));
		setCart([...cart]);
	};

	const addOne = (index) => {
		cart[index].amount++;
		updateCartAmount(cart[index]._id, cart[index].amount);
		sessionStorage.setItem('cart', JSON.stringify(cart));
		setCart([...cart]);
	}

	const onAmountInputChange = (value, index) => {
		if (parseInt(value, 10) >= 1) {
			cart[index].amount = parseInt(value, 10);
		} else {
			cart[index].amount = 1;
		}
		setCart([...cart]);
	};

	const onAmountInputBlur = (index) => {
		updateCartAmount(cart[index]._id, cart[index].amount);
		sessionStorage.setItem('cart', JSON.stringify(cart));
	};

	const getUserInfoFromToken = useCallback(async (token) => {
		const config = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			timeout: 10000,
		};
		const response = await handlePostRequest(ApiUrl.URL_GetUserInfoFromToken, config, {token});
		if (response && response.status === 200) {
			sessionStorage.setItem('user', JSON.stringify(response.data.user));
			sessionStorage.setItem('token', JSON.stringify(token));
			getCart(response.data.user.id);
			
		}
	}, [getCart]);

	useEffect(() => {
		if (location.search !== '') {
			let query = location.search.substr(1).split('&');
			let objQuery = {};
			query.forEach(x => {
				objQuery[x.split('=')[0]] = x.split('=')[1];
			});
			if (objQuery.token !== undefined) {
				getUserInfoFromToken(objQuery.token);
			} else {
				window.location.href = 'https://laravel-login-site.herokuapp.com/administration/login';
			}
		} else {
			if (sessionStorage.getItem('token')) {
				getCart(JSON.parse(sessionStorage.getItem('user')).id);
			} else {
				window.location.href = 'https://laravel-login-site.herokuapp.com/administration/login';
			}
		}
	}, [getCart, getUserInfoFromToken, location.search]);

	useEffect(() => {
		if (sessionStorage.getItem('token')) {
			getCart(JSON.parse(sessionStorage.getItem('user')).id);
		}
	}, [getCart]);

	if (location.search !== '') {
		return <Loading />;
	}
	return (
		<Cart
			cart={cart}
			removeFromCart={removeFromCart}
			removeAllFromCart={removeAllFromCart}
			minusOne={minusOne}
			addOne={addOne}
			onAmountInputChange={onAmountInputChange}
			onAmountInputBlur={onAmountInputBlur}
		/>
	);
};

export default CartContainer;
