import { useEffect, useState } from 'react'

export const useTheme = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
	useEffect(() => {
		document.documentElement.className = theme
		localStorage.setItem('theme', theme)
	}, [theme])

	return {
		theme,
		setTheme,
	}
}
