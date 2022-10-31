document.addEventListener('DOMContentLoaded',()=>{
    fetch("http://localhost:5000/getall")
    // getting a  response
    .then(res =>(res.json))
    // the below is to get the data back
    .then(data =>(console.log(data)))
    loaderHtmlTable([])
})

function loaderHtmlTable(data){
    const table = document.querySelector('table tbody');
    if (data.length === 0){
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>"
    }
}