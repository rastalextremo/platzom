export default function platzom(str){
	let traduccion = str

	// Si la palabra termina en "ar", se le quitan esos dos caracteres 

	if(str.toLowerCase().endsWith('ar')){
		traduccion = str.slice(0, -2)
	}

	// Si la palabra inicia con Z, se le añade "pe" al final 

	if(str.toLowerCase().startsWith('z')){
		traduccion += 'pe'
	}

	// Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas

	const reverse = (str) => str.split('').reverse().join('')

	if(str == reverse(str)){
		return minMay(str)
	}

	function minMay(str){
		const length = str.length
		let traduccion = ''
		let capitalize = true
		for(let i = 0; i < length; i++){
			let char = str.charAt(i)
			traduccion += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return traduccion
	}
	return traduccion
}