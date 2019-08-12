export const currencyIterator = (currency) => {
  if (currency === "") {
    return 'n/a';
  }
  return currency.split(',').join(', ');
}

export const languagesIterator = (languages) => {
  const languageArray = [];

  if (languages.length > 0) {
    languages.forEach((language) => {
      if (language.name === null || language.name === '') {
        languageArray.push('n/a');
      }
      languageArray.push(language.name + " (" + language.native + ")");
    })
  } else {
    languageArray.push('n/a');
  }

  return languageArray.join(', ');
}
