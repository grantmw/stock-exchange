import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { getStock } from '../actions/index';



class SearchBar extends Component {

	render() {
		const { handleSubmit } = this.props
		const searchTerm = this.props.fields.searchTerm;
		let error;
		let { failure } = this.props;
		if (failure && failure.errorType ===  'searchError') {
			error = this.props.failure.message
		} 
								// {searchTerm.touched ? searchTerm.error : ""}
		return(
			<div className="search-bar-container">
				<form onSubmit={handleSubmit(formValues => this.props.getStock(formValues.searchTerm.toUpperCase()))}>
					<div className="input-group">
						<span className="input-group-addon"><button type="submit">Search</button></span>
						<input 
							type="text" 
							autoComplete="off" 
							className="form-control search-input" 
							placeholder="Enter Symbol" 
							{...searchTerm} />
					</div>
					<div className="text-help">
						{error ? error : ""}
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

function mapStateToProps(state) {
	return {
		failure: state.error
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getStock },dispatch);
}

export default reduxForm({
	form: 'SymbolSearch',
	fields: ['searchTerm'],
	validate,
}, mapStateToProps, mapDispatchToProps)(SearchBar)
