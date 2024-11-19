import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'

/** @types */
import type { FormEvent } from 'react'

export default function Navegation() {
	const navigate = useNavigate()

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		const keyword = e.currentTarget.keyword.value.trim()
		e.preventDefault()
		if (keyword === '') return
		navigate(`/search/${keyword}`)
		e.currentTarget.keyword.value = ''
	}

	return (
		<header className='sticky top-0 z-50 mx-auto flex max-w-[1353px] items-center justify-between bg-neutral-800 px-6 py-4 text-neutral-50 lg:px-10'>
			<div className='w-24'>
				<a
					className='size-full bg-gradient-to-tl from-gray-600 to-neutral-50 bg-clip-text text-2xl font-bold text-transparent'
					href='/'>
					PELIS+
				</a>
			</div>
			<form
				className='inline-flex w-56 max-w-64 items-center gap-2 rounded-lg bg-neutral-900/25 px-4 lg:w-72'
				autoComplete='off'
				onSubmit={handleSubmit}>
				<MagnifyingGlassIcon className='size-6 text-neutral-400' />
				<input
					id='search'
					type='text'
					name='keyword'
					className='w-full border-none bg-transparent py-2 text-sm text-neutral-50 placeholder:font-semibold placeholder:text-neutral-400 focus:outline-none lg:text-lg 2xl:text-2xl'
					placeholder='Buscar'
					required
				/>
			</form>
		</header>
	)
}
