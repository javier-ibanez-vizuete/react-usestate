import { useState } from "react";
import "./LikeBtn.css";

export const LikeBtn = () => {
	const [likes, setLikes] = useState(0);
	const upgradeLikes = () => setLikes(likes + 1);
	return (
		<div className="like-btn-container">
			<p>{likes} Likes</p>
			<button onClick={upgradeLikes}>Dar Like</button>
		</div>
	);
};
