function analyzeString(inputString) {
    // Count the number of characters
    const numCharacters = inputString.length;
  
    // Count the number of words
    const numWords = inputString.split(' ').length;
  
    // Count the number of sentences
    const numSentences = inputString.split(/[.!?]/).filter(sentence => sentence.length > 0).length;
  
    return {
      numCharacters,
      numWords,
      numSentences
    };
  }
  
  // Example usage
  const inputString = "This is a sample sentence. It has multiple words, and it ends with a period. How many words and characters are here?";
  const analysisResult = analyzeString(inputString);
  console.log("Analysis result:", analysisResult);
  