// domain/.netlify/functions/hello

const items = [
    {
        id:1, name:'srikanth'
    },
    {
        id:2, name:'emma'
    }
]

exports.handler = async function(event, context){
    return {
        statusCode: 200,
        body: JSON.stringify(items),
    }
}