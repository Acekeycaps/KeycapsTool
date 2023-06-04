import renderer from 'react-test-renderer';
import Home from './page';

describe('Home test', () => {
  test('Home component', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
