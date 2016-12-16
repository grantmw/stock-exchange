import React from 'react';

export default (props) => {
	return(
		<div className="info-container">
			<div className="name-row">
				<div className="side-col"></div>
				<div className="company-name info-cell">
					{props.name} <br />({props.symbol})
				</div>
				<div className="side-col"></div>
			</div>
			<div className="info-high-row">
				<div className="bid-label info-cell">
					Ask Price
				</div>
				<div className="ask-label info-cell">
					Bid Price
				</div>
			</div>
			<div className="info-low-row">
				<div className="ask-info info-cell">
					{props.askPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
				</div>
				<div className="bid-info info-cell">
					{props.bidPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
				</div>
			</div>
		</div>
	);
}

