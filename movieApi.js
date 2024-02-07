const mainDiv=document.getElementById('results')
const inp=document.getElementById('movie-name')
const btn=document.getElementById('btn')
btn.addEventListener('click',fetchData)
function fetchData()
{
    const searchterm= inp.value
    fetch(`https://www.omdbapi.com/?s=${searchterm}&apikey=3efcf25a`)
    .then(function(res)
    {
        return res.json()
    })
    .then(function(data)
    {
        console.log(data)
        displayData(data.Search)
    })
    .catch(function(err){
     console.error(err)
 })    
}
 function displayData(movies)
 {
     movies.forEach(function(movie)
     {
         const div=document.createElement('div');
         div.classList.add('movie');
         const title=document.createElement('h2');
         title.textContent=movie.Title;
         const image=document.createElement('img');
         image.src=movie.Poster;
         image.alt=movie.Title;
         const year=document.createElement('h3');
         year.textContent=movie.Year;
         div.append(title,image,year)
         mainDiv.appendChild(div)
     }
     )
 }