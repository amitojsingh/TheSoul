//options for fuse

var options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
      "key"
]
};

//fuzy search
$("#search").on('input',function(){
    const fuse= new Fuse(flowerobj,options);
    var result=fuse.search($(this).val());
    for (let i=0;i<=result.length;i++){
        $("#search-result").text("");
    for (let i=0;i<=result.length;i++){
        if(flowerName[result[i]]!= undefined){
        $("#search-result").append(flowerName[result[i]]+"<br>");
        }
    }
    }
     
});

//increase
const increase = function(productId){
      const num = $('#' +productId + ' #qty').text();
      if(parseInt(num) >= 1){
        $('#' +productId + ' #qty').text(parseInt(num) + 1);
      }
    };

//decrease button
    const decrease = function(productId){
      const num = $('#' +productId + ' #qty').text();
      if(parseInt(num) > 1){
      $('#' +productId + ' #qty').text(parseInt(num) - 1);
      }
    };
    
//add to cart button
    const addToCart = function(productId) {
      const productCost = $('#'+productId + ' .price').text();
      const productQty = $('#'+productId + ' #qty').text();
      const productName = $('#'+productId + ' .name').text();
      
      const product = {
        name: productName,
        cost: productCost,
        qty: productQty
      };
      const initialCart = localStorage.getItem('myCart');
      let abc;
      console.log(initialCart);
      if(initialCart){
        abc = JSON.parse(initialCart);
      } else {
        abc = [];
      }
      abc.push(product);
      const newListing = JSON.stringify(abc);
      localStorage.setItem('myCart', newListing);    
    }
    var flowerName=["lotus","lily","Daisy", "Black Rose", "Red rose","Blue lily","Yellow rose","Sun rose","red","green","blue rose"];

//displaying flowers
var flowerobj=[];
for(let j=0;j<=flowerName.length;j++){
    flowerobj.push("{key:"+flowerName[j]+"}");
    console.log(flowerobj[j]);
}
    for(let i=0; i<10; i++){
      $('.products').append(`<div class='product' id='product${i}'>
                                <img id="img" src="images/p${i+1}.jpg">
                                <h3 class='name'>${flowerName[i]}</h3>
                                <p>Unit Price: $ <span class='price'>${(i+1)*12}</span></p>
                                <button class='btn btn-default' id='minus' onclick='decrease("product${i}");'> - </button>
                                <span id='qty'>1</span>
                                <button class='btn btn-default' id='plus' onclick='increase("product${i}");'> + </button>
                                <div><button class='btn btn-success' onclick='addToCart("product${i}");'>Add to cart</button></div>
                             </div>`);
    }
