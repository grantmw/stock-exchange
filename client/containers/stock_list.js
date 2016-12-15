import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStock } from '../actions/index'; 

class StockList extends Component {
	constructor(props) {
		super(props);
		this.renderStock = this.renderStock.bind(this);
	}

	renderStock(stockData) {
		const name = stockData.stock.name;
		const quantity = stockData.quantity;
		const paidPrice = stockData.stock.bidPrice;
		const symbol = stockData.stock.symbol;

		return(
			<tr key={name}>
				<td>
					<div>
						{name}
					</div>
				</td>
				<td>
					<div>
						{quantity}
					</div>
				</td>
				<td>
					<div>
						{paidPrice}
					</div>
						<button onClick={() => this.props.getStock(symbol)} className="btn btn-secondary"> View Stock </button>
				</td>
			</tr>
		);
	}

	render() {
		if (!this.props.stocks) {
			return(
				<div>
					You Have No Shares to View
				</div>
			);
		}
		return (
			<div className="col-md-6 stock-list-container">
				{this.props.cash}
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
};


function mapStateToProps(state) {
	return {
		stocks: state.stocks,
		cash: state.cash
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getStock },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StockList);