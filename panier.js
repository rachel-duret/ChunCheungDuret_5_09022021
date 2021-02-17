
let panierLists = JSON.parse(localStorage.getItem('panierLists'));
console.log(panierLists)
function displayPanier( src, title, id, colors, quantité, price){
    let panier = document.getElementById('panier');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('h2')
    //let idNumber = document.createElement('p')
    let color = document.createElement('p')
    let totalQte = document.createElement('p')
    let prix = document.createElement('p')
    let i = document.createElement('i')
    let btnDel = document.createElement('button');
   
    
    
    div.className = "teddy";
    img.src = src;
    name.innerText = title;
    //idNumber.innerText ='ref:'+ id;
    color.innerText = colors;
    totalQte.innerText = quantité;
    prix.innerText = price;
    i.className = "fas fa-euro-sign"
    btnDel.className = 'delBtn'
    btnDel.innerText = 'Supprimer'
   
    panier.appendChild(div);
    div.appendChild(img);
    div.appendChild(name);
    //name.appendChild(idNumber);
    div.appendChild(color)
    div.appendChild(totalQte);
    div.appendChild(prix);      
    prix.appendChild(i)
    div.appendChild(btnDel);
   
 
                           
}
for(let i in panierLists){
    displayPanier( panierLists[i].img, panierLists[i].name,panierLists[i].id,panierLists[i].color,panierLists[i].quantité,panierLists[i].price);
}

 // count total price
 let sum = 0;
 for( let i=0; i<panierLists.length; i++){
     sum += panierLists[i].price 
 }
 let totalPrix = document.createElement('h3');
 let i = document.createElement('i');
 i.className = "  fas fa-euro-sign"
 totalPrix.innerText = 'Total Prix:   ' + sum ;
 totalPrix.appendChild(i);
 panier.appendChild(totalPrix);

 console.log(panier)

function deletGood(){
    let btns = document.querySelectorAll('.delBtn');
    

    for(let i=0; i<btns.length; i++){
        btns[i].addEventListener('click', function(e){
            
            let delDiv = btns[i].parentElement;
            let parent = delDiv.parentElement;
            let removed = parent.removeChild(delDiv);
            removed===removed;
             panierLists.splice(i,1);
             //console.log(panierLists)
           // console.log(JSON.stringify(panierLists));
            localStorage.removeItem('panierLists')
            localStorage.setItem('panierLists',JSON.stringify(panierLists));
            
        
            
        })
    }
   
}
deletGood();