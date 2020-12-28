import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loading from '../common/components/Loading';
import PathName from '../constants/PathName';
import CartContainer from '../screens/cart';
import CheckoutContainer from '../screens/checkout';

const MainRoute = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route exact path={PathName.Cart}>
						<CartContainer />
					</Route>
					<Route exact path={PathName.Checkout}>
						<CheckoutContainer />
					</Route>
					<Route path={'*'}>
						<Loading />
					</Route>
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}

export default MainRoute;
