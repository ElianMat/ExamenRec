$(document).ready(function ()
{
    var a = localStorage.getItem("productos");
    
    if(a === null)
    {
        var vector = [];
        localStorage.setItem("productos", JSON.stringify(vector));
    }
    var dat =  JSON.parse(a);
    $("button").bind("click",function() 
    {        
        var nump = $(this).val();
        var npr = $("#prod" + nump + " td");
        var let = "";
        for (var i = 0; i < npr.length - 1; i++) 
        {
            if (i === npr.length - 2) 
            {
                let = let + $(npr[i]).text();
            } 
            else 
            {
                let = let + $(npr[i]).text() + ",";
            }
        }
        dat.push(let);
        console.log(let);
        localStorage.setItem("productos",JSON.stringify(dat));        
        alert("Se agrego");
    });          
});

