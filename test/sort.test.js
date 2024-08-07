import { sortAsc, sortDesc } from "../src/sort"

describe("sortAsc", () => {
  it("should sort array in ascending order", () => {
    const input = [5, 2, 9, 1, 5, 6]
    const expected = [1, 2, 5, 5, 6, 9]

    expect(sortAsc(input)).toEqual(expected)
  })

  it("should handle empty array", () => {
    const input = []
    const expected = []

    expect(sortAsc(input)).toEqual(expected)
  })

  it("should handle array with one element", () => {
    const input = [42]
    const expected = [42]

    expect(sortAsc(input)).toEqual(expected)
  })

  it("should handle array with duplicate elements", () => {
    const input = [5, 1, 1, 5, 1]
    const expected = [1, 1, 1, 5, 5]

    expect(sortAsc(input)).toEqual(expected)
  })
})

describe("sortDesc", () => {
  it("should sort array in descending order", () => {
    const input = [5, 2, 9, 1, 5, 6]
    const expected = [9, 6, 5, 5, 2, 1]

    expect(sortDesc(input)).toEqual(expected)
  })

  it("should handle empty array", () => {
    const input = []
    const expected = []

    expect(sortDesc(input)).toEqual(expected)
  })

  it("should handle array with one element", () => {
    const input = [42]
    const expected = [42]

    expect(sortDesc(input)).toEqual(expected)
  })

  it("should handle array with duplicate elements", () => {
    const input = [5, 1, 1, 5, 1]
    const expected = [5, 5, 1, 1, 1]

    expect(sortDesc(input)).toEqual(expected)
  })
})
