const count =document.getElementById('para')
console.log(count.textcontent)
let c=0;
function incr()
{
    if(c>25)
    {
        alert(`Number Should Not be Greater Then Zero ${25}`)
    }
    else
    {
        c++;
        count.textContent = c;
    }    
}
function decr()
{
    if(c<=0)
    {
        alert(`Number Should Not be less Then Zero ${0}`)
    }
    else
    {
        c--;
        count.textContent = c;
    }  
}
function reset()
{
    count.textContent = 0;
}