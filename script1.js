


// function loadApi(){
//     console.log('hello api');
//     // fetch("https://fakestoreapi.com/products")
//     //     .then(res => res.json())
//     //     .then(res => console.log(res))
//     //     .catch(error => console.log(error))


    


//     var xhr = new XMLHttpRequest();
//            xhr.open("GET","https://fakestoreapi.com/products",true);
//            xhr.onload = function(){
//                if(this.status == 200){
//                 var result = JSON.parse(this.responseText);
//                 console.log(result);
//                 var output = '';

//                 result.map( i => {
//                     console.log(i);
//                     output += `
                    // <div id="cart_item" key=${i.id} style="width:200px; margin:10px">
                    //     <img src=${i.image} alt="item4" style="width:200px;height:300px">
                    //     <p style="text-overflow: ellipsis;
                    //         overflow: hidden;
                    //         white-space: nowrap;"
                    //     >
                    //         ${i.title}
                    //     </p>
                    //     <p>${i.price}</p>
                    //     <p>⭐⭐⭐</p>
                    // </div> 
//                     `
//                 })
                
//             document.getElementById('cart_items').innerHTML = output;
//             }
//            }
//            xhr.send();
// }



function loading_data(){
    let searh_data = document.getElementById('search_data').value;
    console.log(searh_data);

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://fakestoreapi.com/products/"+searh_data+"",true);
    xhttp.onload = function(){
        if(this.status==200){
            var result = JSON.parse(this.responseText);
            var title = result.title;
            console.log(title);


            document.getElementById('item_image').src = result.image;

            document.getElementById('item_name').innerHTML = result.title;

            document.getElementById('item_price').innerHTML = `$${result.price}`;

            document.getElementById('item_image').style.width = '250px';

            document.getElementById('item_image').style.width = '250px';

            document.getElementById('cart_item').style.border = '2px solid #ccc';

            document.getElementById('item_stars').innerHTML = '⭐⭐⭐⭐  243';

            //var output = '';

            // var output = `
            // <div id="cart_item" key=${result.id} style="width:200px; margin:10px">
            //             <img src=${result.image} alt="item4" style="width:200px;height:300px">
            //             <p style="text-overflow: ellipsis;
            //                 overflow: hidden;
            //                 white-space: nowrap;"
            //             >
            //                 ${result.title}
            //             </p>
            //             <p>${result.price}</p>
            //             <p>⭐⭐⭐</p>
            //         </div> 
            // `;

            
            
        }
    }
    xhttp.send();
}