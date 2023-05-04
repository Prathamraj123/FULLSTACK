var i=1;
function swap()
{
    
    var arr=["p1.png","p2.png","p3.png","p4.png","p5.png"];

    
    if(i<=4)
    // x.style.backgroundImage=arr[i];
   document.getElementById("change").src=arr[i++];
    else
    {
        i=0;
        document.getElementById("change").src=arr[i++];
    }

}