import Navegation from '@components/Navegation'
import Home from '@pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function App() {
	return (
		<Router>
			<Navegation />
			<main className='main'>
				<Routes>
					<Route path='/' element={<Home />} />
					{/* <Route path='/movie/:id' element={<Movie />} />
					<Route path='/categories/:id' element={<Categories />} />
					<Route path='/search/:keyword' element={<Search />} />
					<Route path='*' element={<NotFound />} /> */}
				</Routes>
			</main>
		</Router>
	)
}
