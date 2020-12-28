/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CartItem from './CartItem';

const ShoppingSummary = ({cart, removeFromCart, removeAllFromCart, minusOne, addOne, onAmountInputChange, onAmountInputBlur}) => {
	return (
		<>
			<div className="row">
				<div className="col-12">
					{/* Shopping Summary */}
					<table className="table shopping-summery">
						<thead>
							<tr className="main-hading">
								<th>PRODUCT</th>
								<th>NAME</th>
								<th className="text-center">UNIT PRICE</th>
								<th className="text-center">QUANTITY</th>
								<th className="text-center">TOTAL</th>
								<th className="text-center">
									<i className="ti-trash remove-icon" onClick={removeAllFromCart} />
								</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item, index) => (
								<CartItem
									item={item}
									key={index}
									index={index}
									removeFromCart={removeFromCart}
									minusOne={minusOne}
									addOne={addOne}
									onAmountInputChange={onAmountInputChange}
									onAmountInputBlur={onAmountInputBlur}
								/>
							))}
						</tbody>
					</table>
					{/*/ End Shopping Summary */}
				</div>
			</div>
		</>
	);
}

export default ShoppingSummary;
