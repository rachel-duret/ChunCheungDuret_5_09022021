let addGoods = document.getElementById('btn');
          addGoods.addEventListener('click', function(){
          
              let request = new XMLHttpRequest();
              request.onreadystatechange = function(){
                  if (request.readyState == 4 && request.status ==200){
                      let data = JSON.parse(this.responseText);
                      console.log(data[0]);
                     
                      
                    
                     
                      document.getElementById('name').innerHTML = data[0].name;
                      document.getElementById('color').innerHTML = data[0].colors;
                      document.getElementById('pric').innerHTML = data[0].price;
                      document.getElementById('dec').innerHTML = data[0].description;
                      document.getElementById('idnumber').innerHTML ='I d :'+ data[0]._id;
                     
                  }
              }
              request.open("get", "http://localhost:3000/api/teddies");
              request.send();
          });