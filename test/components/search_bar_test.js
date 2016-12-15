import { renderComponent, expect } from '../test_helper';
import SearchBar from '../../client/containers/search_bar';

describe('SearchBar Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(SearchBar);		
	});
	it('contains a form', () => {
		expect(component.find('form')).to.exist;
	});
	it('has right class', () => {
		expect(component).to.have.class('search-bar-container');
	});
});
