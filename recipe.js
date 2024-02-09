const mainDiv=document.getElementById("recipes")
function fetchData()
{
    fetch("https://dummyjson.com/recipes")
    .then(function(res)
    {
        return res.json()
    })
    .then(function(data)
    {
        console.log(data)
        displayData(data)
    })
    .catch(function(err)
    {
        console.error(err)
    })
}
fetchData()
const displayData=(data)=>
{
    console.log(data)
    data.recipes.forEach((rec)=>
    {
        const div=document.createElement('div');
        const name=document.createElement('h2');
        name.textcontent=rec.name
        const img=document.createElement('img');
        img.src=rec.image
        img.alt=rec.title
        const ingredients=document.createElement('p');
        ingredients.textContent="ingredients:"+rec.ingredients.map((value=>value));
        const instructions=document.createElement('p');
        instructions.textContent="instructions:"+rec.instructions.map((value=>value));
        div.append(name,img,ingredients,instructions);
        mainDiv.appendChild(div);
        div.classList.add('recipe');
    }
    )
}
