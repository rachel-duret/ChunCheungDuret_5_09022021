
let panierLists = JSON.parse(localStorage.getItem('panierLists'));
console.log(panierLists)
function displayPanier( src, title, price){
    let panier = document.getElementById('panier');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let i = document.createElement('i')
    let btn = document.createElement('button');
    div.className = "teddy";
    img.src = src;
    h2.innerText = title;
    p.innerText = price ;
    i.className ="fas fa-euro-sign"
    btn.className = 'delBtn'
    btn.innerText = 'delete'
    
    
   
    panier.appendChild(div);
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);      
    p.appendChild(i)
    div.appendChild(btn);
    
    
                           
}
for(let i in panierLists){
    displayPanier( panierLists[i].imageUrl, panierLists[i].name, panierLists[i].price);
}