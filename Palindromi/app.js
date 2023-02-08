const word = prompt('Inserisci una parola:');
    const isPalindrome = (word) => {
      for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) {
          return false;
        }
      }
      return true;
    }
    const result = isPalindrome(word) ? 'La parola è palindroma.' : 'La parola non è palindroma.';
    alert(result);