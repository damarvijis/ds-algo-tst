import { fishBash } from "../src/fish-bash"

describe("fishBash", function () {
  it("should print string 1 until 10. but, the 3, 6, 9 is change to 'fish', also 5 and 10 change to 'bash'", function () {
    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation()

    fishBash(10)

    const expectedOutput = ["1", "2", "fish", "4", "bash", "fish", "7", "8", "fish", "bash"]

    expectedOutput.forEach(value => expect(consoleLogSpy).toHaveBeenCalledWith(value))

    consoleLogSpy.mockRestore()
  })

  it("should print string 1 until 15. but, the 3, 6, 9 is change to 'fish', also 5 and 10 change to 'bash', and the 15 is change to 'fish bash'", function () {
    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation()

    fishBash(15)

    const expectedOutput = [
      "1",
      "2",
      "fish",
      "4",
      "bash",
      "fish",
      "7",
      "8",
      "fish",
      "bash",
      "11",
      "fish",
      "13",
      "14",
      "fish bash",
    ]

    expectedOutput.forEach(value => expect(consoleLogSpy).toHaveBeenCalledWith(value))

    consoleLogSpy.mockRestore()
  })
})
