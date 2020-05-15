var answer = "";
var doneList = [];
var i = Math.floor(Math.random() * 5);


function checkAns(){
    if (document.getElementById("ip1").value.toLowerCase() == answer.toLowerCase()){
        document.getElementById("ip1").value = "";
        getNext();
    }
    else{
        document.getElementById("ip1").value = "";
        alert("Wrong Answer. Retry!");
    }
}



function getNext(){
           

    if (doneList.length < qL.length){
        do{
            i = Math.floor(Math.random() * 5);
        } while(doneList.includes(i));
            
        doneList.push(i);

        document.getElementById("head1").innerText = "Question " + doneList.length;
        document.getElementById("quest").innerText = qL[i];
        answer = aL[i];
    }
    else
    {
        alert("Congrats!!! See You Tomorrow");
    }

}