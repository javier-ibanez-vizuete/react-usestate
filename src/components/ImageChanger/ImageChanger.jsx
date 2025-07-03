import { useState } from "react";
import "./ImageChanger.css";

export const ImageChanger = () => {
	const images = ["/src/assets/images/draco-image-example.avif", "/src/assets/images/animals-friend.jpg"];
	const [handleImage, setHandleImage] = useState(true);
	const changeImage = () => setHandleImage(!handleImage);
	return (
		<div className="image-changer-container">
			<button onClick={changeImage}>CAMBIAR IMAGEN</button>
			<img src={handleImage ? images[0] : images[1]} alt="" />
		</div>
	);
};
