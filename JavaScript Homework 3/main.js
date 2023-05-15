// Exercise 3

const personalInfo = {
firstName: 'Tatia',
lastName: 'Gujabidze',
address: {
    city: 'Tbilisi',
    country: 'Georgia',
    zipCode: '0160'
}
}

const personalInfo2 = {
    ...personalInfo,
    address: {
        ...personalInfo.address
    }
}

console.log(personalInfo.address.zipCode)
console.log(personalInfo2.address.zipCode)



// Exercise 2

const user = {
    userId: '1234',
    banks: ['BOA', 'TBC', 'BOG'],
    address: 'Broadway',
    city: 'New York'

}

const {city} = {} = user
console.log(city)