/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {calculateCartValue, formatCurrency} from '../../../utils/Util';

const TotalAmount = ({cart}) => {
	return (
		<>
			<div className="row">
				<div className="col-12">
					{/* Total Amount */}
					<div className="total-amount">
						<div className="row">
							<div className="col-lg-8 col-md-5 col-12" />
							<div className="col-lg-4 col-md-7 col-12">
								<div className="right">
									<ul>
										<li>
											Cart Subtotal<span>{formatCurrency(calculateCartValue(cart).toString(), 'vnđ')}</span>
										</li>
										<li className="last">
											You Pay<span>{formatCurrency(calculateCartValue(cart).toString(), 'vnđ')}</span>
										</li>
									</ul>
									<div className="button5">
										<a href="/checkout" className="btn">
											Checkout
										</a>
										<a href="#" className="btn">
											Continue shopping
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*/ End Total Amount */}
				</div>
			</div>
		</>
	);
}

export default TotalAmount;
