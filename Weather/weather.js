
async function handleSuccess(result){
    var city = document.getElementById("name").value
    var out = document.getElementById("weatherReport")

    out.innerHTML = "Loading..."

    await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`,{
        method : 'GET',
        headers : { 'X-Api-Key' : '04mTphFa2PO+xZ3J6XpokA==5oxX4PczXBElBMHL'}
    }).then(response => response.json())
    .then(data => {
        if(data.temp == undefined){
            throw "City Not Found"
        }
        out.innerHTML = "Temperature: "+data.temp+"°C"
    }).catch(error => {
        out.innerHTML = "City Not Found"
    })
}

// $.ajax({
//     method : 'GET',
//     url  : `https://api.api-ninjas.com/v1/weather?city=`+city,
//     headers : { 'X-Api-Key' : '04mTphFa2PO+xZ3J6XpokA==5oxX4PczXBElBMHL'},
//     contentType: 'application/json',
//     success: function (result){
//         console.log(result)
//         document.getElementById("weatherReport").innerHTML = result.temp
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// })