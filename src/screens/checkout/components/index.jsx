/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderContainer from "../../../common/components/header";
import CheckoutSection from "./CheckoutSection";

const Checkout = ({cart, checkout, firstName, setFirstName, lastName, setLastName, email, setEmail, address, setAddress, phoneNumber, setPhoneNumber}) => {
	return (
		<>
			{/* Header */}
			<HeaderContainer />
			{/*/ End Header */}
			{/* Start Checkout */}
			<CheckoutSection
				cart={cart}
				checkout={checkout}
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
			{/*/ End Checkout */}
		</>
	);
};

export default Checkout;