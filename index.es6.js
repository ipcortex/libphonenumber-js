import metadata from './metadata.min.json'

import parseCustom from './es6/parse'
import formatCustom from './es6/format'

export function parse()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return parseCustom.apply(this, parameters)
}

export function format()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return formatCustom.apply(this, parameters)
}


export { default as parseCustom }         from './es6/parse'
export { default as formatCustom }        from './es6/format'
