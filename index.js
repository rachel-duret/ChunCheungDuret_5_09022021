// add goods in html
window.onload = function request(url, callback){
    let request = new XMLHttpRequest();
              request.onreadystatechange = function(){
                  if (request.readyState == 4 && request.status ==200){
                      let dataArray = JSON.parse(this.responseText);
                      function displayTeddies(href, src, title, price){
                        let box = document.getElementById('teddies');
                        let a = document.createElement('a');
                        let div = document.createElement('div');
                        let img = document.createElement('img');
                        let h2 = document.createElement('h2')
                        let p = document.createElement('p')
                        let i = document.createElement('i')
                        a.href = href;
                        div.className = "teddy";
                        img.src = src;
                        h2.innerText = title;
                        p.innerText = price ;
                        i.className ="fas fa-euro-sign"
                        box.appendChild(a);
                        a.appendChild(div);
                        div.appendChild(img);
                        div.appendChild(h2);
                        div.appendChild(p);
                        p.appendChild(i)
                        console.log(box)
                                               
                    }
                    displayTeddies('./produits/norbert.html', dataArray[0].imageUrl, dataArray[0].name, dataArray[0].price);
                    displayTeddies('./produits/arnold.html',dataArray[1].imageUrl, dataArray[1].name, dataArray[1].price);
                    displayTeddies('./produits/lenny_and_carl.html',dataArray[2].imageUrl, dataArray[2].name, dataArray[2].price);
                    displayTeddies('./produits/gustav.html',dataArray[3].imageUrl, dataArray[3].name, dataArray[3].price);
                    displayTeddies('./produits/garfunkel.html',dataArray[4].imageUrl, dataArray[4].name, dataArray[4].price);
                              
                  }
              }
              request.open("get", "http://localhost:3000/api/teddies");
              request.send();

}



//create page norbert.html





