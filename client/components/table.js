import React, { Component } from 'react';

export default class StockListTable extends Component {
	constructor(props) {
		super(props);
		this.renderStock = this.renderStock.bind(this);
	}
	renderStock(stockData) {
		return(
			<tr key={stockData.name}>
				<td>
					<div>
						{stockData.stock.name}
					</div>
				</td>
				<td>
					<div>
						{stockData.quantity}
					</div>
				</td>
				<td>
					<div>
						${stockData.stock.bidPrice}
					</div>
					<button onClick={() => this.props.retrieveStockInfo(stockData.stock.symbol)} className="btn btn-secondary"> View Stock </button>
				</td>
			</tr>
		);
	}
	render() {
		return (
			<div className="stock-list-container">
				<div className="portfolio-container">
					Your Portfolio 
					<div className="cash-container">
						Cash: {this.props.cash.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
					</div>
				</div>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Company</th>
							<th>Shares</th>
							<th>Price Paid</th>
						</tr>
					</thead>
					<tbody>
						{this.props.stocks.map(this.renderStock)}
					</tbody>
				</table>
			</div>
		);
	}
} 


