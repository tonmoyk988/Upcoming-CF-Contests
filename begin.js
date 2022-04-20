function displaySome(some){
    document.getElementById("codeforces_table").innerHTML = some;
    // setTimeout(()=>{
    //     document.getElementById("printer").innerHTML = some;
    //     document.getElementById("codeforces_table").innerHTML = some;
    // },2000)
}

// Convert unix timestamp to readable time 
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month ;
    return time;
}



fetch("https://codeforces.com/api/contest.list").then(
    res=> {
        res.json().then(
            data=>{
                console.log(data);

                if(data.result.length > 0){
                    var tmp = "";

                    //data.responseText
                    const u= data.result;
                    
                    for(let i=0;i<u.length ; i++){

                        if(u[i].phase == "BEFORE"){
                            

                            var unixtime = u[i].startTimeSeconds , time="";
                            if(unixtime != null){
                                
                                time = timeConverter(unixtime);
                            }
                            
                            tmp+="<tr>";
                            tmp = "<td>"+time + "</td>" + "<td>" + u[i].name + "</td>" + "</tr>" + tmp;
                            displaySome(tmp);
                        }
                        else break;
                    }
                    
                }
            }
        )
    }
);

