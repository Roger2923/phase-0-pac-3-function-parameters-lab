function introduction(name){
    return `Hi, my name is ${name}.`;
} 
console.log(introduction("josh"))

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("josh", "Java script"));

function introductionWithLanguageOptional( name ='randy', language = 'JavaScript'){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional('josh'))




