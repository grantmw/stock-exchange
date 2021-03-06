import { renderComponent, expect } from '../test_helper';
import SearchBar from '../../client/containers/search_bar';

describe('SearchBar Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(SearchBar);	
	});
	it('contains an input form', () => {
		expect(component.find('form')).to.exist;
	});
	it('rendered in the right place', () => {
		expect(component).to.have.class('search-bar-container');
	});
});
