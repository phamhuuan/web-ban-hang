/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {formatCurrency} from '../../../utils/Util';

const CartItem = ({item, index, removeFromCart, minusOne, addOne, onAmountInputChange, onAmountInputBlur}) => {
	return (
		<tr>
			<td className="image" data-title="No">
				<img src={item.image} alt="#" />
			</td>
			<td className="product-des" data-title="Description">
				<p className="product-name">
					{item.name}
				</p>
			</td>
			<td className="price" data-title="Price">
				<span>{formatCurrency(item.value.toString(), 'vnđ')}</span>
			</td>
			<td className="qty" data-title="Qty">
				{/* Input Order */}
				<div className="input-group">
					<div className="button minus">
						<button
							type="button"
							className="btn btn-primary btn-number"
							disabled={item.amount === 1 ? "disabled" : ""}
							data-type="minus"
							data-field="quant[1]"
							onClick={() => minusOne(index)}
						>
							<i className="ti-minus" />
						</button>
					</div>
					<input
						type="text"
						name="quant[1]"
						className="input-number"
						data-min={1}
						data-max={100}
						onChange={(event) => onAmountInputChange(event.target.value, index)}
						onBlur={() => onAmountInputBlur(index)}
						value={item.amount}
					/>
					<div className="button plus">
						<button
							type="button"
							className="btn btn-primary btn-number"
							data-type="plus"
							data-field="quant[1]"
							onClick={() => addOne(index)}
						>
							<i className="ti-plus" />
						</button>
					</div>
				</div>
				{/*/ End Input Order */}
			</td>
			<td className="total-amount" data-title="Total">
				<span>{formatCurrency((item.value * item.amount).toString(), 'vnđ')}</span>
			</td>
			<td className="action" data-title="Remove">
				<div onClick={() => removeFromCart(index)}>
					<i className="ti-trash remove-icon" />
				</div>
			</td>
		</tr>
	);
};

export default CartItem;
