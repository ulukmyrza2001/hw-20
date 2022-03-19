import { useState, useCallback } from 'react'

const useFetch = () => {
	const [loading, setLoading] = useState(false)
	const [errorMassage, setErrorMassage] = useState(null)
	const [message, setMessage] = useState(null)

	const requestData = useCallback(async (request, applyData) => {
		try {
			setLoading(true)
			setErrorMassage(null)
			const response = await fetch(request.url, {
				method: request.method ? request.method : 'GET',
				headers: request.headers ? request.headers : {},
				body: request.body ? JSON.stringify(request.body) : null,
			})
			if (!response.ok) {
				throw new Error('error')
			}
			const data = await response.json()
			console.log(data);
			request.method === 'POST' || ('DELETE' && applyData(data))
			request.method && setMessage('Ваш данный успешно сохранен')
		} catch (error) {
			setErrorMassage(error.message)
		}
		setLoading(false)
	}, [])
	return {
		loading,
		errorMassage,
		requestData,
		message,
	}
}

export default useFetch
