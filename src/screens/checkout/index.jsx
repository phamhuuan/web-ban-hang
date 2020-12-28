/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import { handlePostRequest } from "../../api/api";
import ApiUrl from "../../constants/ApiUrl";
import Checkout from "./components";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateEmail, validatePhoneNumber } from "../../utils/Util";

const CheckoutContainer = () => {
	const location = useLocation();
	const history = useHistory();
	const [cart, setCart] = useState([]);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');

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
			localStorage.setItem('cart', JSON.stringify(response.data.result));
			history.push(location.pathname);
		} else {
			getCart(userId);
		}
	}, [history, location.pathname]);

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
			localStorage.setItem('user', JSON.stringify(response.data.user));
			localStorage.setItem('token', JSON.stringify(token));
			getCart(response.data.user.id);
			
		}
	}, [getCart]);

	useEffect(() => {
		let cart = localStorage.getItem('cart');
		if (cart) {
			setCart(JSON.parse(cart));
		}
	}, []);

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
			if (!localStorage.getItem('token')) {
				window.location.href = 'https://laravel-login-site.herokuapp.com/administration/login';
			} else {
				getCart(JSON.parse(localStorage.getItem('user')).id);
			}
		}
	}, [getCart, getUserInfoFromToken, history, location.pathname, location.search]);

	const checkout = () => {
		if (firstName.trim() === '') {
			toast('You must enter first name', {type: 'error'});
		}
		if (lastName.trim() === '') {
			toast('You must enter last name', {type: 'error'});
		}
		if (email.trim() === '') {
			toast('You must enter email address', {type: 'error'});
		}
		if (phoneNumber.trim() === '') {
			toast('You must enter phone number', {type: 'error'});
		}
		if (address.trim() === '') {
			toast('You must enter address', {type: 'error'});
		}
		if (!validateEmail(email.trim())) {
			toast('Invalid email address', {type: 'error'});
		}
		if (!validatePhoneNumber(phoneNumber.trim())) {
			toast('Invalid phone number', {type: 'error'});
		}
	};

	return (
		<>
			<Checkout
				cart={cart}
				checkout={checkout}
				firstName={firstName}
				setFirstName={setFirstName}
				lastName={lastName}
				setLastName={setLastName}
				email={email}
				setEmail={setEmail}
				address={address}
				setAddress={setAddress}
				phoneNumber={phoneNumber}
				setPhoneNumber={setPhoneNumber}
			/>
			<ToastContainer />
		</>
	);
};

export default CheckoutContainer;