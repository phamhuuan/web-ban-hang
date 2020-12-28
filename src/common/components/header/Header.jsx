/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from './logo';
import TopBar from './topBar';

const Header = ({user, logout}) => {
	return (
		<>
			<header className="header shop">
				{/* Topbar */}
				<TopBar user={user} logout={logout} />
				{/* End Topbar */}
				<div className="middle-inner">
					<div className="container">
						<div className="row">
							<div className="col-lg-2 col-md-2 col-12">
								{/* Logo */}
								<Logo />
								{/*/ End Logo */}
							</div>
							<div className="col-lg-8 col-md-7 col-12" />
							<div className="col-lg-2 col-md-3 col-12" />
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;