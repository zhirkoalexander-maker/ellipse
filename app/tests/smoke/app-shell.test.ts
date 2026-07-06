import { describe, expect, it } from 'vitest'
import { bootstrapApp } from '../../src/main'

describe('bootstrapApp', () => {
  it('creates the game shell inside the provided root', () => {
    const root = document.createElement('div')

    bootstrapApp(root)

    expect(root.querySelector('[data-role="game-shell"]')).not.toBeNull()
  })
})