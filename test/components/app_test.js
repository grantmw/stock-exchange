import { renderComponent, expect } from '../test_helper';
import App from '../../client/components/app';

describe('App Component', () => {
	it('renders app component', () => {
		const component = renderComponent(App);

		expect(component).to.contain('Hello!');

	});
});
