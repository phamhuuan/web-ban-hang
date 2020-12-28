/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ShoppingSummary from './ShoppingSummary';
import TotalAmount from './TotalAmount';

const ShoppingCart = ({cart, removeFromCart, removeAllFromCart, minusOne, addOne, onAmountInputChange, onAmountInputBlur}) => {
	return (
		<>
			<div className="shopping-cart section">
				<div className="container">
					<ShoppingSummary
						cart={cart}
						removeFromCart={removeFromCart}
						removeAllFromCart={removeAllFromCart}
						minusOne={minusOne}
						addOne={addOne}
						onAmountInputChange={onAmountInputChange}
						onAmountInputBlur={onAmountInputBlur}
					/>
					<TotalAmount cart={cart} />
				</div>
			</div>
			{/*/ End Shopping Cart */}
		</>
	);
}

export default ShoppingCart;
