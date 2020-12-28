/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const TopRight = ({user, logout}) => {
	return (
		<div className="right-content">
			<ul className="list-main">
				<li>
					<i className="ti-user" /> <a href="#">My account</a>
				</li>
				<li>
					<i className="ti-power-off" />
					<a onClick={user ? logout : null}>{user ? 'Logout' : 'Login'}</a>
				</li>
			</ul>
		</div>
	);
};

export default TopRight;
