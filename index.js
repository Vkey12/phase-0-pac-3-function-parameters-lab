function introduction(victor) {
    return `Hi, my name is ${victor}.`
}

function introductionWithLanguage(victor, language) {
    return `Hi, my name is ${victor} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(victor, language = 'JavaScript') {
    return `Hi, my name is ${victor} and I am learning to program in ${language}.`
}