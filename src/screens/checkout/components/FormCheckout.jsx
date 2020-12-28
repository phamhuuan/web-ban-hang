/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const FormCheckout = ({firstName, setFirstName, lastName, setLastName, email, setEmail, address, setAddress, phoneNumber, setPhoneNumber}) => {
	return (
		<>
			<div className="col-lg-8 col-12">
				<div className="checkout-form">
					<h2>Make Your Checkout Here</h2>
					{/* Form */}
					<form className="form" method="post" action="#">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="form-group">
									<label>
										First Name<span>*</span>
									</label>
									<input
										type="text"
										name="name"
										placeholder={'First name'}
										required="required"
										value={firstName}
										onChange={(event) => setFirstName(event.target.value)}
									/>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12">
								<div className="form-group">
									<label>
										Last Name<span>*</span>
									</label>
									<input
										type="text"
										name="name"
										placeholder={'Last name'}
										required="required"
										value={lastName}
										onChange={(event) => setLastName(event.target.value)}
									/>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12">
								<div className="form-group">
									<label>
										Email Address<span>*</span>
									</label>
									<input
										type="email"
										name="email"
										placeholder={'Email address'}
										required="required"
										value={email}
										onChange={(event) => setEmail(event.target.value)}
									/>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12">
								<div className="form-group">
									<label>
										Phone Number<span>*</span>
									</label>
									<input
										type="number"
										name="number"
										placeholder={'Phone number'}
										required="required"
										value={phoneNumber}
										onChange={(event) => setPhoneNumber(event.target.value)}
									/>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 col-12">
								<div className="form-group">
									<label>
										Address<span>*</span>
									</label>
									<input
										type="text"
										name="address"
										placeholder={'Address'}
										required="required"
										value={address}
										onChange={(event) => setAddress(event.target.value)}
									/>
								</div>
							</div>
						</div>
					</form>
					{/*/ End Form */}
				</div>
			</div>
		</>
	);
};

export default FormCheckout;