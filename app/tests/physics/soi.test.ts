import { describe, expect, it } from 'vitest'
import { computeSoiRadius, findDominantBody } from '../../src/physics/soi'

describe('computeSoiRadius', () => {
  it('matches the patched-conics sphere of influence formula', () => {
    const result = computeSoiRadius(2e25, 2e26, 1e8)

    expect(result).toBeCloseTo(39810717.05534972, 5)
  })
})

describe('findDominantBody', () => {
  it('returns the innermost body whose SOI contains the position', () => {
    const sun = {
      id: 'sun',
      name: 'Sun',
      mass: 2e26,
      radius: 696340000,
      color: '#f6d36a',
      position: { x: 0, y: 0, z: 0 },
      soiRadius: Number.POSITIVE_INFINITY,
    }

    const earth = {
      id: 'earth',
      name: 'Earth',
      mass: 2e25,
      radius: 6371000,
      color: '#3a8bd8',
      position: { x: 1e8, y: 0, z: 0 },
      soiRadius: 4e7,
    }

    const dominant = findDominantBody({ x: 1.01e8, y: 0, z: 0 }, [sun, earth])

    expect(dominant.id).toBe('earth')
  })
})