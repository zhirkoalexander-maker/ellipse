import { describe, expect, it } from 'vitest'
import { computeThrustVector } from '../../src/physics/forces'

describe('computeThrustVector', () => {
  it('points up when heading is zero', () => {
    expect(computeThrustVector(0)).toEqual({ x: -0, y: 1, z: 0 })
  })

  it('points left when heading is ninety degrees', () => {
    expect(computeThrustVector(Math.PI / 2)).toEqual({ x: -1, y: 0, z: 0 })
  })
})