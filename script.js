let bagItems;

onload();

function onload() {

 let bagItemsStr=localStorage.getItem('bagItems');
 bagItems=bagItemsStr?JSON.parse(bagItemsStr):[];
  DisplayitemsOnHomePage();
  AddedItemCOunt();
  DisplayItemInTheCart();

}

function AddInBag(itemid) {
  bagItems.push(itemid);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  AddedItemCOunt();
}
function AddedItemCOunt() {
  let countAddItemInCart = document.querySelector("#increment");
  if (bagItems.length > 0) {
    countAddItemInCart.innerHTML = bagItems.length;
  }
}

function DisplayitemsOnHomePage() {

  let containerElement = document.querySelector(".itemsCointer");
  let innerHTML = '';

  items.forEach(item => {
    innerHTML += `
    <div class="itemCointer">
    <img src="${item.item_image}"
                  width="200" alt="">
              <div class="ratingAndreview">
                  <span class="Rating">${item.rating.star}⭐|</span>
                  <span class="reviewCount">${item.rating.review}</span>
              </div>
    
               <div class="comapny">${item.company_name}</div>
              <span class="aboutProduct">${item.item_Summary}</span>
              <div class="rateandDiscount">
                  <span class="rate"> ₹${item.current_price}</span>
                  <span class="orginalRate">₹${item.orginal_price}</span>
                  <span class="Discount">(${item.item_Discount}%OFF)</span>
              </div>
    
              <button onclick="AddInBag(${item.id})">ADD To the Cart</button>
          </div>
    `;
  })
  containerElement.innerHTML=innerHTML;
 
}
 function  DisplayItemInTheCart(){
     let cartElement=document.querySelector('.cartWrapper');
      cartElement.innerHTML = 
      `
      <div class="InsideCArt">
      <div>
          <img class="cart-image"
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/b/y/-original-imagg5u8qjaagv2s.jpeg?q=70"
              alt="" width="200">
      </div>
      <div class="DetailInCart">
          <label class="comapny">Salco</label>
          <label class="deleteItem" for="">X</label>
          <p class="aboutProduct">Bollywood Georgette Saree</p>
          <div class="rateAndorginal">
              <span class="rate">Rs 331</span>
              <span class="orginalRate"> Rs 3999</span>
              <span class="Discount">(91%OFF)</span>
          </div>

          <br>
          <div for=""><b>14 days</b> return available</div>

          <label>Dilivery by
              <span class="dilivery_Date"> 24 nobember 2023 </span>
          </label>
      </div>
  </div>
      `

 }

  