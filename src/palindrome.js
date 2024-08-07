/*
  Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama 
  dengan string yang diinputkan maka return true jika tidak return false
*/

export const isPalindrome = string => {
  const cleanedStr = string.replace(/\s/g, "").toLowerCase()
  const reversedStr = cleanedStr.split("").reverse().join("")
  return cleanedStr === reversedStr
}
