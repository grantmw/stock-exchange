import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { buyStock } from '../actions/index';
import { sellStock } from '../actions/index';
import NoActiveStock from '../components/no_active_stock';
import _$ from 'jquery';
import ActiveStockCard from '../components/active_stock_card';
import validate from './helpers/validate';

class ActiveStock extends Component {
	
	renderActiveStock() {
		$('#quanity-form').on('keyup keypress', function(e) {
			var keyCode = e.keyCode || e.which;
			if (keyCode === 13) { 
				e.preventDefault();
			return false;
			}
		});
		const { stock } = this.props;
		const { handleSubmit } = this.props;
		const quantityValue = this.props.fields.quantityValue;
		const index = this.props.stocks.findIndex((item) => item.stock.symbol == stock.symbol);
		let ownedQuantity = 0;
		if (index !== -1) {
			ownedQuantity = this.props.stocks[index].quantity;
		}
		let buyButtonClassNames = 'btn btn-primary buy-button';
		let sellButtonClassNames = "btn btn-primary sell-button";
		let buyButtonError = '';
		let sellButtonError = '';
		if (quantityValue && this.props.cash < (stock.askPrice * parseFloat(quantityValue.value))) {
			buyButtonClassNames += ' disable-button';
			buyButtonError = 'Insufficient Assets';
		}
		if (quantityValue && quantityValue.value > ownedQuantity) {
			sellButtonClassNames += ' disable-button';
			sellButtonError = 'Do not have enough shares';
		}
		let searchError;
		let { failure } = this.props;
		if (failure && (failure.errorType ===  'searchError' || failure.errorType ===  'httpError')) {
			searchError = this.props.failure.message;
		} 
		if (searchError) {
			return(
				<div>
					<NoActiveStock message={this.props.failure.message} />
				</div>
			);
		} else {
			return(
				<div className="card-container">
					<ActiveStockCard name={stock.name} symbol={stock.symbol} bidPrice={stock.bidPrice} askPrice={stock.askPrice} />
					<form id="quanity-form">
						<div className="form-group">
							<input
								type="text"
								className="form-control quantity-input"
								placeholder="Enter Share Quantity"
								{...quantityValue}
								/>
							<div className="text-help">
								{quantityValue.touched ? quantityValue.error : ""}
							</div>
							<div className="button-row">
								<div className="buy-col">
									<button className={buyButtonClassNames} onClick={handleSubmit(formValues => this.props.buyStock(parseInt(formValues.quantityValue, 10), this.props.stock, this.props.cash))}>Buy</button>	
									<div className="buy-error">{buyButtonError}</div>
								</div>
								<div className="sell-col">
									<button className={sellButtonClassNames} onClick={handleSubmit(formValues => this.props.sellStock(parseInt(formValues.quantityValue, 10), this.props.stock))}>Sell</button>
									<div className="sell-error">{sellButtonError}</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			);
		}
	}
	
	render() {
		if (!this.props.stock) {
			return(
				<div className="active-stock-container">
					<NoActiveStock message="SEARCH FOR A STOCK TO GET STARTED" />
				</div>
			);
		} else {
			return(
				<div className="active-stock-container">
					{this.renderActiveStock()}
				</div>
			);
		}
	}
};


function mapStateToProps(state) {
	return {
		stock: state.activeStock,
		cash: state.cash,
		failure: state.error,
		stocks: state.stocks
	};
};

export default reduxForm({
	form: 'QuantityForm',
	fields: ['quantityValue'],
	validate
}, mapStateToProps, { buyStock, sellStock })(ActiveStock)