import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";



function Details(props) {

	const { store } = useContext(Context);

		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img
							src="http://via.placeholder.com/800x600"
							className="w-100" alt="description"
						></img>
					</div>
					<div className="col-6">
						<div className="text-center m-3">
							<h2> {store.characters[props.match.params.theid].name}</h2>
							<p>
								Sed ut perspiciatis unde omnis iste natus error
								sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae
								ab illo inventore veritatis et quasi architecto
								beatae vitae dicta sunt explicabo. Nemo enim
								ipsam voluptatem quia voluptas sit aspernatur
								aut odit aut fugit, sed quia consequuntur magni
								dolores eos qui ratione voluptatem sequi
							</p>
						</div>
					</div>
				</div>
				<br />
				<div className="row ml-1 mr-1 background border-top border-danger">
					<div className="col-12 d-flex justify-content-between text-danger text-center">
						<div className="appearances p-2 m-3">
							<h6>Name</h6>
							<p>{store.characters[props.match.params.theid].name}</p>
						</div>
						<div className="affiliations m-3 p-2">
							<h6>Birth Year</h6>
							<p className="text-center">
							{store.characters[props.match.params.theid].birth_year}
							</p>
						</div>
						<div className="locations p-2 m-3">
							<h6>Gender</h6>
							<p>{store.characters[props.match.params.theid].gender}</p>
						</div>
						<div className="gender p-2 m-3">
							<h6>Height</h6>
							<p>{store.characters[props.match.params.theid].height}</p>
						</div>
						<div className="dimensions p-2 m-3">
							<h6>Skin Color</h6>
							<p className="text-center">
							{store.characters[props.match.params.theid].skin_color}
							</p>
						</div>
						<div className="species p-2 m-3">
							<h6>Eye Color</h6>
							<p>{store.characters[props.match.params.theid].eye_color}</p>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Details;

Details.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string,
	birth_year: PropTypes.string,
	gender: PropTypes.string,
	heigth: PropTypes.string,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string,
	results: PropTypes.object
};