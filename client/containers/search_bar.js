import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { getStock } from '../actions/index';



class SearchBar extends Component {

	render() {
		const { handleSubmit } = this.props
		const searchTerm = this.props.fields.searchTerm;
		return(
			<div className="search-bar-container">
				<form onSubmit={handleSubmit(formValues => this.props.getStock(formValues.searchTerm))}>
					<div className="input-group">
					  <span className="input-group-addon"><button type="submit">Search</button></span>
					  <input type="text" autoComplete="off" className="form-control" placeholder="Enter Symbol" {...searchTerm} />
					</div>
				</form>
			</div>
		);
	}
};

function validate(values){
	const errors = {};
	if (!values.searchTerm){
		errors.searchTerm = "Enter a Symbol"
	}
	return errors;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getStock },dispatch);
}

export default reduxForm({
	form: 'SymbolSearch',
	fields: ['searchTerm'],
	validate,
}, null, mapDispatchToProps)(SearchBar)
