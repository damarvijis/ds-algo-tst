import { isPalindrome } from "../src/palindrome"

describe("isPalindrome", () => {
  it("should return true for a single word palindrome", () => {
    expect(isPalindrome("level")).toBe(true)
  })

  it("should return true for a phrase with spaces that is a palindrome", () => {
    expect(isPalindrome("race car")).toBe(true)
  })

  it("should return true for a longer phrase with spaces that is a palindrome", () => {
    expect(isPalindrome("a man a plan a canal panama")).toBe(true)
  })

  it("should return true for a phrase with spaces and punctuation that is a palindrome", () => {
    expect(isPalindrome("kasur ini rusak")).toBe(true)
  })

  it("should return false for a string that is not a palindrome", () => {
    expect(isPalindrome("hello world")).toBe(false)
  })

  it("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true)
  })

  it("should return true for a string with only one character", () => {
    expect(isPalindrome("a")).toBe(true)
  })

  it("should return false for a string with two different characters", () => {
    expect(isPalindrome("ab")).toBe(false)
  })
})
