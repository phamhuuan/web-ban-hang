/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CheckoutWidget from "./CheckoutWidget";
import FormCheckout from "./FormCheckout";

const CheckoutSection = ({cart, checkout, firstName, setFirstName, lastName, setLastName, email, setEmail, address, setAddress, phoneNumber, setPhoneNumber}) => {
	return (
		<>
			<section className="shop checkout section">
				<div className="container">
					<div className="row">
						<FormCheckout
							firstName={firstName}
							setFirstName={setFirstName}
							lastName={lastName}
							setLastName={setLastName}
							email={email}
							setEmail={setEmail}
							address={address}
							setAddress={setAddress}
							phoneNumber={phoneNumber}
							setPhoneNumber={setPhoneNumber}
						/>
						<CheckoutWidget cart={cart} checkout={checkout} />
					</div>
				</div>
			</section>
		</>
	);
};

export default CheckoutSection;