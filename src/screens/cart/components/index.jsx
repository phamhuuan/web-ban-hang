/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HeaderContainer from '../../../common/components/header';
import ShoppingCart from './ShoppingCart';

const Cart = ({cart, removeFromCart, removeAllFromCart, minusOne, addOne, onAmountInputChange, onAmountInputBlur}) => {
	return (
		<>
			{/* Header */}
			<HeaderContainer />
			{/*/ End Header */}
			{/* Shopping Cart */}
			<ShoppingCart
				cart={cart}
				removeFromCart={removeFromCart}
				removeAllFromCart={removeAllFromCart}
				minusOne={minusOne}
				addOne={addOne}
				onAmountInputChange={onAmountInputChange}
				onAmountInputBlur={onAmountInputBlur}
			/>
			{/*/ End Shopping Cart */}
		</>
	);
}

export default Cart;
