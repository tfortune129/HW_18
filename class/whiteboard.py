# Ransom Note
# Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
# Each letter in magazine can only be used once in ransomNote.
# Example 1:
# Input: ransomNote = "a", magazine = "b"
# Output: false
# Example 2:
# Input: ransomNote = "aa", magazine = "ab"
# Output: false
# Example 3:
# Input: ransomNote = "aa", magazine = "aab"
# Output: true


def answer(x, y):
    for char in set(x):
        if x.count(char) == y.count(char):
            return True
    return False


x = "aa"
y = "aab"
print (answer(x,y))