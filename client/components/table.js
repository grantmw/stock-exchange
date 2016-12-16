import React, { Component } from 'react';
import AssetChart from './asset_chart';

export default class StockListTable extends Component {
	constructor(props) {
		super(props);
		this.renderStock = this.renderStock.bind(this);
	}
	renderStock(stockData) {
		return(
			<tr key={stockData.stock.name} className="stock-list-row">
				<td>
					<div>
						{stockData.stock.name}
					</div>
					<div className="stock-list-button">
						<button onClick={() => this.props.retrieveStockInfo(stockData.stock.symbol)} className="btn btn-secondary"> View Stock </button>
					</div>
				</td>
				<td>
					<div>
						{stockData.quantity}
					</div>
				</td>
				<td>
					<div>
						${stockData.stock.askPrice}
					</div>
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
					<div className="asset-chart-container">
						<AssetChart stocks={this.props.stocks} cash={this.props.cash} />
					</div>
				</div>
				<table className="table">
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


