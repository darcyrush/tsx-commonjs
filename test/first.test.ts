import * as First from "../src/first"
import { describe, it, mock } from "node:test"

describe('Example', async () => {
  it('example', async () => {
    mock.getter(First, 'first') // Fails with tsx
    // mock.method(First, 'first') // Works with ts-node
  })
})
