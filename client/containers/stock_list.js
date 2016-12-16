import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStock } from '../actions/index'; 
import StockListTable from '../components/table'; 

class StockList extends Component {

	render() {
		if (!this.props.stocks) {
			return(
				<div>
					You Have No Shares to View
				</div>
			);
		}
		return (
			<div className="stock-list-container">
				<StockListTable stocks={this.props.stocks} cash={this.props.cash} retrieveStockInfo={this.props.getStock} />
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