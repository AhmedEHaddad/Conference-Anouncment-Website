/* 21808164 */

function calc(){
    let text="";
    let x = document.getElementsByName("sessions");
    let s = 0;
    let p = document.getElementsByName(`ptype${s}`);
    let n = document.getElementsByName("noDays");
    let pt ;
    /*alert(p[1].value);*/
    
    let j=0, cost=0;
    
    for (i=0;i<x.length;i++){
        if(x[i].checked){
            if (document.getElementsByName(`ptype${i}`)[0].checked){
                /*alert(document.getElementsByName(`ptype${i}`)[0].value);*/
                cost = cost+(100*n[i].value);
            } else if (document.getElementsByName(`ptype${i}`)[1].checked){
                /*alert(document.getElementsByName(`ptype${i}`)[1].value);*/
                cost = cost+(200*n[i].value);
            }            
            j++;
        }
    }
    if (cost >= 800)
        cost = cost - cost*0.10;

    /*make sure all drop down lists are selected*/
    if (isNaN(cost)){
        alert("please select number of days you wish to participate for all sessions!");
        return;
    }
    /* ....... */
    document.getElementById("result").innerHTML=j+" sessions"+"<br/>"+"Total cost is: " +cost;
    let con = confirm(`proceed to pay ${cost} euros ?`);
    if(con)
        alert("Thank You");
    else if(con === false)
        alert("Registration withdrew");
}
