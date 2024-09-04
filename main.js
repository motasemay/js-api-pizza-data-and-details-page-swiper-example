async function getData() {
    const response=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const data=await response.json();
    const recipes=data.recipes;

    const result=recipes.map(function(recipe){

        return `
        <div>
        <h2>${recipe.title}</h2>
        <img src="${recipe.image_url}"/>
        <a href="detail.html?id=${recipe.recipe_id}">Details</a>
        </div>
        `;
    }).join('')

    console.log(result);
    document.querySelector(".pizza-section .row").innerHTML=result;
    document.querySelector(".numberOfItem").textContent=data.count;
}
async function getSwiperData(){
    const response=await fetch("https://dummyjson.com/products");
    const data=await response.json();
    const products=data.products;

    const result=products.map(function(product){
        return `
              <div class="swiper-slide">
                <img src="${product.thumbnail}"/>
              </div>

        `
    }).join("");
    document.querySelector(".swiper-wrapper").innerHTML=result;

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        autoplay: {
            delay: 1000,
          },
          slidesPerView: 3,
          spaceBetween: 1,
          clickable:true,
      });}
getSwiperData();
getData();
