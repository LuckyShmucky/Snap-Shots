import { render, screen, waitFor } from '@testing-library/react';
import renderer, { act }  from "react-test-renderer"
// import { act } from 'react-dom/test-utils';
import App from './App';

beforeEach(() => {
  // sets everything back to initial state before each test
  fetch.resetMocks();
})




test("receives GitHub name", async () => {
  fetch.mockResponseOnce(JSON.stringify({name: 'Christian Luciano'}))
  render(<App />)
  const gitHubName = await waitFor(() => screen.getByTitle('name-header'))
  expect(gitHubName.textContent).toBe('Christian Luciano')
})



///This is not working anymore for some reason 
test('renders a snapshot for app component', () => {
 const tree = renderer.create(<App/>).toJSON()
 
 expect(tree).toMatchSnapshot()
});

// test("To see if user's name is in h2", async ()=>{
//   fetch.mockResponseOnce(JSON.stringify({name: 'Christian Luciano'}))
//   render(<App/>)
//   const name = await waitFor(() => screen.getByRole('heading', { level: 2 }))
//   expect(name).toHaveTextContent("Christian Luciano")
// })

