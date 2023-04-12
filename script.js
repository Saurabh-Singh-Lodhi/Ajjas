var i;

var arr = [
    {
        data : "hiiiii",
        like : 0,
        dislike : 0,
        replies : []
    },
    {
        data : "helloooooo",
        like : 0,
        dislike : 0,
        replies : []
    },
    {
        data : "heyyyyyyy",
        like : 0,
        dislike : 0,
        replies : []
    }
]

function show(){
    document.querySelector("#top").innerHTML = "";
    arr.forEach(function(e , index){

        var str = `<div id="comments">
        <span>Saurabh</span>
        <p>${e.data}</p><br>
        <button onClick="likehandler(${index})" id="like" >like ${arr[index].like}</button> <button onClick="dislikehandler(${index})" id="dislike">dislike ${arr[index].dislike}</button>
        <button onClick="replyhandler(${index})" id="reply" >reply</button></div> `
        document.querySelector("#top").innerHTML += str;

        if(arr[index].replies.length>0){
            arr[index].replies.forEach(function(r){
                document.querySelector("#top").innerHTML += `<div id=baatein>
                <p>${r}</p>
                <button onClick="replyreplyhandler(${index})" id="replyreply">reply</button></div>
                </div>`;
            })
        }

        document.querySelector("#comment").value = "";
    
    })
}

function likehandler(index){
        arr[index].like += 1;
        show();
}
function dislikehandler(index){
        arr[index].dislike += 1;
        show();
}
function replyhandler(index){
    i = index;
    document.querySelector("#popup").style.display = "initial";
}
// function replyreplyhandler(index){
//     document.querySelector("#popup1").style.display = "initial";
// }

document.querySelector("#replysend").addEventListener("click",function(){
    var rep = document.querySelector("#rep").value;
    arr[i].replies.push(rep);
    document.querySelector("#popup").style.display = "none";
    show();
})

// document.querySelector("#popup1 #replysend").addEventListener("click",function(){
//     var rep1 = document.querySelector("#rep1").value;
//     arr[i].replies.push(rep1);
//     document.querySelector("#popup1").style.display = "none";
//     show();
// })

show();

document.querySelector("#send").addEventListener("click",function(){
    var com = document.querySelector("#comment").value;
    var temp = {
        data : com,
        like : 0,
        dislike : 0,
        replies : []
    }
    
    arr.push(temp);
    document.querySelector("#top").innerHTML = "";
    document.querySelector("#comment").value = "";
    show();

})

document.querySelector("#clear").addEventListener("click",function(){
    document.querySelector("#top").innerHTML = "";
})
