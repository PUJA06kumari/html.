const md=document.getElementById('modal')
const btn=document.getElementById('btn')
const closebtn=document.getElementById('close')
function openModal()
{
    md.style.display='block'
    document.body.style.backgroundColor="rgba(216, 206, 216, 0.8)"
}
function closeModal()
{
    md.style.display="none"
    document.body.style.backgroundColor="rgba(216, 206, 216, 0.8)"
}
function change()
{
    md.style.display='block'
}