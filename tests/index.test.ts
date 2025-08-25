import { expect, test } from 'vitest'
import { greet } from '../src/index'

test('greet', () => {
  expect(greet('World')).toBe('Hello, World!')
})
