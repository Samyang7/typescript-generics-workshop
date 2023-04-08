import { Equal, Expect } from '../helpers/type-utils'

// normal function declaration
// function returnWhatIPassIn<T>(t: t): t {}

// My solution: array function declaration is bit different
const returnWhatIPassIn = <T>(t: T): T => {
  return t
}

const one = returnWhatIPassIn(1)
const matt = returnWhatIPassIn('matt')

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, 'matt'>>]
