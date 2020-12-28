/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {calculateCartValue, formatCurrency} from "../../../utils/Util";

const CheckoutWidget = ({cart, checkout}) => {
	return (
		<>
			<div className="col-lg-4 col-12">
				<div className="order-details">
					{/* Order Widget */}
					<div className="single-widget">
						<h2>CART TOTALS</h2>
						<div className="content">
							<ul>
								<li>
									Sub Total<span>{formatCurrency(calculateCartValue(cart).toString(), 'vnđ')}</span>
								</li>
								<li className="last">
									Total<span>{formatCurrency(calculateCartValue(cart).toString(), 'vnđ')}</span>
								</li>
							</ul>
						</div>
					</div>
					{/*/ End Order Widget */}
					{/* Button Widget */}
					<div className="single-widget get-button">
						<div className="content">
							<div className="button">
								<a onClick={checkout} className="btn">
									proceed to checkout
								</a>
							</div>
						</div>
					</div>
					{/*/ End Button Widget */}
				</div>
			</div>
		</>
	);
};

export default CheckoutWidget;