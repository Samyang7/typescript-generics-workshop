import { expect, it } from 'vitest'
import { Equal, Expect } from '../helpers/type-utils'

// I think i should come up with this idea
type GreetingResult<TGreeting> = TGreeting extends 'hello' ? 'goodbye' : 'hello'

function youSayGoodbyeISayHello<T extends 'goodbye' | 'hello'>(greeting: T) {
  return (greeting === 'goodbye' ? 'hello' : 'goodbye') as GreetingResult<T>
}

it('Should return goodbye when hello is passed in', () => {
  const result = youSayGoodbyeISayHello('hello')

  type test = [Expect<Equal<typeof result, 'goodbye'>>]

  expect(result).toEqual('goodbye')
})

it('Should return hello when goodbye is passed in', () => {
  const result = youSayGoodbyeISayHello('goodbye')

  type test = [Expect<Equal<typeof result, 'hello'>>]

  expect(result).toEqual('hello')
})
