const convert_form = document.querySelector('#convert-form')
const years_input = convert_form.querySelector('input')
const result = document.querySelector('#result')

convert_form.querySelector('button').addEventListener('click', e => {
	e.preventDefault()

	convert_form.classList.add('hide')
	result.classList.remove('hide')

	document.querySelector('#output').textContent = `${make_ordinal(years_input.value)} Century`
})

document.querySelector('#try-again').addEventListener('click', e => {
	years_input.value = ""

	result.classList.add('hide')
	convert_form.classList.remove('hide')
})

function make_ordinal(year) {
	const century = Math.ceil(parseInt(year) / 100)

	if (century == 11 || century == 12 || century == 13) {
		return century + 'th'
	} else if (century % 10 == 1) {
		return century + 'st'
	} else if (century % 10 == 2) {
		return century + 'nd'
	} else if (century % 10 == 3) {
		return century + 'rd'
	} else {
		return century + 'th'
	}
}
