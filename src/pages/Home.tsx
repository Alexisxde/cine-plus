import { getAllCategories, getAllMoviesCategories } from '@api/movies'
import Loading from '@components/Loading'
import Slider from '@components/Slider'
import { useEffect, useState } from 'react'

export default function Home() {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		const getCategories = async () => {
			try {
				const data = await getAllCategories()
				const categoriesWithMovies = await Promise.all(
					data.genres.map(
						async ({ id, name }: { id: number; name: string }) => {
							const movies = await getAllMoviesCategories(id, 2)
							return {
								id,
								name,
								movies
							}
						}
					)
				)
				setCategories(categoriesWithMovies)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}
		getCategories()
	}, [])

	if (error) return <div>{error}</div>
	if (loading) return <Loading />

	return (
		<>
			{categories?.map(({ id, name, movies }) => (
				<section
					key={id}
					className='flex h-[350px] flex-col px-10'
					style={{ scrollbarWidth: 'none' }}>
					<h2 className='max-w-max py-2 text-2xl font-bold transition-all hover:underline'>
						<a href={`/categories/${id}`}>{name}</a>
					</h2>
					<Slider title='Hola' movies={movies} />
				</section>
			))}
		</>
	)
}
