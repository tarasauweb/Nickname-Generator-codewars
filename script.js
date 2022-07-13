function nicknameGenerator(name) {
    const lowers = ['a', 'e', 'i', 'o', 'u']
    let result = ''
    let nameArr = name.split('')
    if (name.length <= 3) {
        result = "Error: Name too short"
    }
    else {
        if (lowers.includes(nameArr[2])) {
            result = nameArr.join('')
            result = result.slice(0, 4)
        } else {
            result = nameArr.join('')
            result = result.slice(0, 3)
        }
    }
    return result
}



nicknameGenerator('Samantha')