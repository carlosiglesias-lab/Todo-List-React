import React, { useState } from "react";

const Card = () => {
    const [cardsList, setCardsList] = useState([]);
	const backgrounds = ["bg-success", "bg-warning", "bg-danger", "bg-primary", "bg-secondary"];

	const createNewCard = () => {
		setCardsList([...cardsList, backgrounds[Math.floor(Math.random() * backgrounds.length)]]);
	}
	return (
		<div className="text-center">
			<button onClick={createNewCard} className="btn btn-lg btn-success mt-5">Create Card</button>
			<div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3">
				{cardsList.map((bg, index) => {
					return (
						<div className="col">
							<div className={`card ${bg}`}>
								<img src="https://picsum.photos/400" className="" />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								</div>

							</div>
						</div>
					)

				})}
			</div>
		</div>
	);
}
export default Card;
