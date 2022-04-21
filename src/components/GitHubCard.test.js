import { render, screen, waitFor } from '@testing-library/react';
import GitHubCard from './GitHubCard';
import renderer  from "react-test-renderer"


beforeEach(()=>{
    fetch.resetMocks()
})
it("should have a src from github api for image", async ()=>{
    fetch.mockResponseOnce(JSON.stringify({avatar_url: 'https://avatars.githubusercontent.com/u/92145822?v=4'}))
    render(<GitHubCard/>)
    const cardImage = await screen.findByAltText('profile picture')
    expect(cardImage).toHaveAttribute('src', expect.stringContaining('avatars.githubusercontent.com'))
})


// it('should have a placeholder src for image', ()=>{
   
//     render(<GitHubCard/>)
//     const cardImage  = screen.getByRole('cardImage')
//     expect(cardImage).toHaveAttribute('src', expect.stringContaining('holder.js/100px180'))
// })


test('renders snapshot of github card', ()=>{
    const tree = renderer.create(<GitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
})