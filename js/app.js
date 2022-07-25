let addBtn=document.getElementById("addBtn");
shownotes();
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if (notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    addTxt.value="";
    localStorage.setItem("notes", JSON.stringify(notesObj));


    shownotes();

})

// -----------------Function to Show Notes----------------------

   function shownotes(){
       let notes=localStorage.getItem("notes");
       if(notes==null){
           notesObj=[];
       }
       else{
           notesObj=JSON.parse(notes);
       }
        let html="";
       notesObj.forEach(function(element,index){
           html+=`<div class="noteCard card my-2 mx-2" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">Note ${index+1}</h5>
             <p class="card-text">${element}</p>
             <button id="${index}" onclick="deletenode(this.id)" class="btn btn-primary">Delete Note</button>
           </div>
           </div>`

       })

     let notesEle=document.getElementById("notes");
     if(notesObj.length!=0){
     notesEle.innerHTML=html;
     }
     else{
         notesEle.innerHTML=`Nothing to show! Use "Add a note Section" to add notes.`;
     }

}

// --------------------Function to Delete Nodes----------------------

function deletenode(index){
    // console.log("I am deleting");
  

    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();
 
}




// ---------------------------SearchNotes------------------------------

let search=document.getElementById("searchTxt");

search.addEventListener("input",function(){
    let inputVal=search.value.toLowerCase();
    let notecards=document.getElementsByClassName("noteCard");
    Array.from(notecards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
          if(cardTxt.includes(inputVal)){
              element.style.display="block";
          }
          else{
              element.style.display="none";
          }

    })



})


