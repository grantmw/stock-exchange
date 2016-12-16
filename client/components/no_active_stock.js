import React from 'react';

export default (props) => {
	return(
		<div className="no-active-stock-container">
			<div className="no-active-message">
				{props.message}
			</div>
		</div>
	);
}


