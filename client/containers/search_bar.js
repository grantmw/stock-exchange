import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { getStock } from '../actions/index';



class SearchBar extends Component {

	render() {
		const { handleSubmit } = this.props
		const searchTerm = this.props.fields.searchTerm;
		return(
			<div className="search-bar-container col-sm-4">
				<form className="form-inline" onSubmit={handleSubmit(formValues => this.props.fetchStock(formValues.searchTerm))}>
					<input 
						placeholder="Enter Symbol"
						autoComplete="off"
						type="text"
						className="form-control"
						{...searchTerm} />
					<button type="submit" className="btn btn-primary">Search</button>
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
