import React from 'react';
import TopLeft from './TopLeft';
import TopRight from './TopRight';

const TopBar = ({user, logout}) => {
	return (
		<div className="topbar">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12 col-12">
						{/* Top Left */}
						<TopLeft />
						{/*/ End Top Left */}
					</div>
					<div className="col-lg-8 col-md-12 col-12">
						{/* Top Right */}
						<TopRight user={user} logout={logout} />
						{/* End Top Right */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;