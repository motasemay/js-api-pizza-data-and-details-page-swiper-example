async function getDetails(){
    const urlParms=new URLSearchParams(window.location.search);
    const id =urlParms.get("id");
    const response= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    const data=await response.json();
    const {ingredients, recipe_id, image_url,title}=data.recipe;
    
    document.querySelector("h1").innerHTML=title;
    document.querySelector("img").src=image_url;
    const result=ingredients.map(function(ing){
        return `
            <li>${ing}</li>
        `;
    }).join('');
    document.querySelector(".ingredients").innerHTML=result;
   
}
getDetails();