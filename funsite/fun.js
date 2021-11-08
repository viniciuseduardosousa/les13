function changeME()
{
    let hideMe= documemnt.getElementByIt("hideMe");
    hideMe.style.backgroundColor="red";
}
function changeUs()
{
    let ons= document.getElementsByClassName("enOns");
    for(var i = 0; i <ons.length;i++)
    {
        ons[i].style.backgroundColor="purple";
    }
}