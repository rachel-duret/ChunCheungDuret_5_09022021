// desplay teddies
'use strict';
let url = fetch('http://localhost:3000/api/teddies');//send request ask data of products
url.then(function(data){
    return data.json();  
})
.then(function(dataArray){
    //utiliser les information de dataArray pour desplay teddies in html. 
    function displayTeddies( src, title, price,href){
        let box = document.getElementById('teddies');
        let div = document.createElement('div');
        let img = document.createElement('img');
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let i = document.createElement('i')
        let a = document.createElement('a');
        div.className = "teddy";
        img.src = src;
        h2.innerText = title;
        p.innerText = price/100 ;
        i.className ="fas fa-euro-sign"
        a.innerText = 'Voir plus'
        
        a.href = href;
        box.appendChild(div);
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);      
        p.appendChild(i)
        p.appendChild(a);                          
    }
    //recuperer chaque information de produit et applle la fonction.
    for(let i in dataArray){
        displayTeddies( dataArray[i].imageUrl, dataArray[i].name, dataArray[i].price, 'produit.html?id='+dataArray[i]._id);
    }
})
.catch(function(error){
    alert('error');
    
});
