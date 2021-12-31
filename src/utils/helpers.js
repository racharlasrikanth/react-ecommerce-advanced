export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number / 100)
    return newNumber
}

export const getUniqueValues = (data, type) => {
    let unique = data.map((eachItem)=>{
        return eachItem[type];
    })
    if(type === 'colors'){
        unique = unique.flat();
    }
    return ['all', ...new Set(unique)]
}
