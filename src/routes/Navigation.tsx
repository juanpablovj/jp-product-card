import { Suspense } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import logo from '../../logo.svg';
import { ShoppingPage } from '../pages/ShoppingPage';

export const Navigation = () => {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<BrowserRouter>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="React Logo" />
						<ul>
							<li>
								<NavLink to="/home" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
									Shopping
								</NavLink>
							</li>
							<li>
								<NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
									About
								</NavLink>
							</li>
							<li>
								<NavLink to="/users" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
									Users
								</NavLink>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path="home" element={<ShoppingPage />} />
						<Route path="about" element={<div />} />
						<Route path="users" element={<div />} />

						<Route path="/*" element={<Navigate to="/home" replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};
