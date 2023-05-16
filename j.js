var parser, xmlDoc;
var barcode = ""
var interval 
document.addEventListener('keydown',function(e){
    if (interval){
        clearInterval(interval)
    }
    if(e.code =="Enter"){
        if (barcode)
            handleBarcode(barcode)
        barcode=""
        return
        
    }
    if(e.key != "Shift")
        barcode += e.key
    interval = setInterval(()=> barcode="",20)
})
function handleBarcode(scanned_barcode){
    document.querySelector('#last-barcode').innerHTML= scanned_barcode
    if (scanned_barcode === "LP0063137305"){
        let url = "./text.xml"
        fetch (url)
        .then(response => response.text())
        .then (data=>{
            console.log(data)
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(data,"application/xml");
            document.querySelector("#s").innerHTML = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
        })
    }

}

// document.addEventListener('DOMContentLoaded',() =>{

//     let url = "./text.xml"
//     fetch (url)
//     .then(response => response.text())
//     .then (data=>{
//         console.log(data)
//         let parser = new DOMParser();
//         let xmlDoc = parser.parseFromString(data,"application/xml");
//         document.querySelector("#s").innerHTML = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
//     })
// })



// 