import { expect, it } from 'vitest'
import { Equal, Expect } from '../helpers/type-utils'

// my solution
type firstGenerator = {
  run: () => string
}
type secondGenerator = () => string

function runGenerator(
  generator: firstGenerator
): ReturnType<firstGenerator['run']>
function runGenerator(generator: secondGenerator): ReturnType<secondGenerator>
function runGenerator(generator: firstGenerator | secondGenerator) {
  if (typeof generator === 'function') {
    return generator()
  }
  return generator.run()
}

it('Should accept an object where the generator is a function', () => {
  const result = runGenerator({
    run: () => 'hello',
  })

  expect(result).toBe('hello')

  type test1 = Expect<Equal<typeof result, string>>
})

it('Should accept an object where the generator is a function', () => {
  const result = runGenerator(() => 'hello')

  expect(result).toBe('hello')

  type test1 = Expect<Equal<typeof result, string>>
})
