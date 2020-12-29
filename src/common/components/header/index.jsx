import React, {useState} from 'react';
import Header from './Header';

const HeaderContainer = () => {
	const [user] = useState(true);
	const logout = async () => {
		const token = sessionStorage.getItem('token');
		window.location.href = `https://laravel-login-site.herokuapp.com/administration/logout?token=${token}`.replace('"', '');
	};
	return (
		<Header user={user} logout={logout} />
	);
};

export default HeaderContainer;