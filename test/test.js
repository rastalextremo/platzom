const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
	
	it('Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function () {
		const traduccion = platzom('sometemos')
		expect(traduccion).to.equal('SoMeTeMoS')
	})

	it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function () {
		const traduccion = platzom('Programar')
		expect(traduccion).to.equal('Program')
	})

	it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
		const traduccion = platzom('Zarpar')
		expect(traduccion).to.equal('Zarppe')
	})
	
})