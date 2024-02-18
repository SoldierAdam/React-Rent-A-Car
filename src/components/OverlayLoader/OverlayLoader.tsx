<<<<<<< HEAD
import "./Overlayloader.css";
=======

import './overlayloader.css';

>>>>>>> 79631e9730e71e2f600e09ccc682811ae7ef975f
import { useSelector } from "react-redux";

type Props = {};

const OverlayLoader = (props: Props) => {
	const requestCount = useSelector((state: any) => state.loading.requestCount);

	return (
		<>
			{requestCount > 0 && (
				<div className="overlay">
					<div className="overlay__inner">
						<div className="overlay__content">
							<span className="spinner"></span>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default OverlayLoader;