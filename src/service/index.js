export function requestDest() {
    return fetch('/restapi/soa2/14422/displayWindow', {
        method: 'POST',
        body: JSON.stringify({startCity: 59, siteID: 1, version: "B", catgoryID: 2, tabID: 100041})
    }).then((res)=>{
        if(res.ok) {
            return res.json();
        }
    }).catch((e)=>{
        console.log("e is ------ ", e);
    }) 
}