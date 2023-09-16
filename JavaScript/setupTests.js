// Import testing utilities or libraries you may need
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme for React component testing
configure({ adapter: new Adapter() });

// Add any other setup or configuration you need for your tests
