import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import starwars from "../../img/starwars.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.deleteFavorites();
	}, []);

	return (
		<nav className="navbar navbar-light header d-flex justify-content-between bg-light">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img
						src={starwars} 
						alt=""
					/>
				</a>
				<div className="btn-group">
					<button
						type="button"
						className="btn btn-primary dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favoritos {store.favorites.length}
					</button>
					<div className="dropdown-menu dropdown-menu-right">
						<button className="dropdown-item" type="button">
							{store.favorites.map((elemento, index) => {
								return (
									<div key={index} className="d-flex">
										<p>{elemento}</p>
										<button className="btn" onClick={() => actions.deleteFavorites(index)}>
											<i className="fa fa-trash" />
										</button>
									</div>
								);
							})}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};