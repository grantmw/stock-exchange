import { renderComponent, expect } from '../test_helper';
import ActiveStock from '../../client/containers/active_stock';

describe('ActiveStock Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(ActiveStock);
	});
	it('should display directions on page load', () => {
		expect(component.find('.no-active-message')).to.have.html('SEARCH FOR A STOCK TO GET STARTED');
	});	
	it('should have an active stock container', () => {
		expect(component).to.have.class('active-stock-container');
	});
	it('there should be no selected stock on page load', () => {
		expect(component.find('.no-active-stock-container')).to.exist;
	});
});


