// add goods in html
let url = fetch('http://localhost:3000/api/teddies');
url.then(function(data){
    return data.json();
   
}).then(function(dataArray){
    console.log(dataArray[0]._id);
    function displayTeddies(id, src, title, price,href){
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
        p.innerText = price ;
        i.className ="fas fa-euro-sign"
        a.innerText = 'Voir plus'
        a.id =id;
        a.href = href;
        box.appendChild(div);
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);      
        p.appendChild(i)
        p.appendChild(a);
        console.log(box)
                               
    }
    displayTeddies( dataArray[0].name, dataArray[0].imageUrl, dataArray[0].name, dataArray[0].price, 'produit.html?id='+dataArray[0]._id);
    displayTeddies(dataArray[1].name,dataArray[1].imageUrl, dataArray[1].name, dataArray[1].price, 'produit.html?id='+dataArray[1]._id);
    displayTeddies(dataArray[2].name,dataArray[2].imageUrl, dataArray[2].name, dataArray[2].price, 'produit.html?id='+dataArray[2]._id);
    displayTeddies(dataArray[3].name,dataArray[3].imageUrl, dataArray[3].name, dataArray[3].price, 'produit.html?id='+dataArray[3]._id);
    displayTeddies( dataArray[4].name,dataArray[4].imageUrl, dataArray[4].name, dataArray[4].price, 'produit.html?id='+dataArray[4]._id);
       
})
.catch(function(error){
    alert('error');
    
});
