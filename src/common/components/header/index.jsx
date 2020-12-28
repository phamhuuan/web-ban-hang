import React, {useEffect, useState} from 'react';
import Header from './Header';

const HeaderContainer = () => {
	const [user, setUser] = useState();
	const logout = async () => {
		const token = localStorage.getItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		localStorage.removeItem('cart');
		window.location.href = `https://laravel-login-site.herokuapp.com/administration/logout?token=${token}`.replace('"', '');
	};
	useEffect(() => {
		let currentUser = localStorage.getItem('user');
		if (currentUser) {
			setUser(JSON.parse(currentUser));
		}
	}, []);
	return (
		<Header user={user} logout={logout} />
	);
};

export default HeaderContainer;