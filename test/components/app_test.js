import { renderComponent, expect } from '../test_helper';
import App from '../../client/components/app';

describe('App Component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(App);
	});
	it('should show a search bar', () => {
		expect(component.find('.search-bar-container')).to.exist;
	});
	it('should show a list of stocks', () => {
		expect(component.find('.stock-list-container')).to.exist;
	});
	it('should show a selected stock', () => {
		expect(component.find('.active-stock-container')).to.exist;
	});
});
