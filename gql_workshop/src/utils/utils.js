export const currencyIterator = (currency) => {
  console.log({ currency });
  if (currency === "") {
    return 'n/a';
  } else if (currency === undefined) {
    return '-currency missing-';
  }
  return currency.split(',').join(', ');
}

export const languagesIterator = (languages) => {
  const languageArray = [];

  if (!languages || languages.length === 0) {
    return 'language missing';
  }

  languages.forEach((language) => {
    const languageName = language.name ? language.name : '-language name missing-';
    const languageNativeName = language.native ? language.native : 'native language name missing';

    languageArray.push(languageName + " (" + languageNativeName + ")");
  })

  return languageArray.join(', ');
}
