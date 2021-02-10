$(document).ready(function ()
{
    var a = localStorage.getItem("productos");
    var dt = JSON.parse(localStorage.getItem("productos"));
    var id = [];
    if(a === null){
        var vec = [];
        localStorage.setItem("productos", JSON.stringify(vec));
    }
      

    for (var i = 0; i < dt.length; i++) {
        var fila = dt[i].toString().split(',');
        var plan = `<tr id="p${i}">
                <td><h2>${fila[0]}</h2></td>
                <td><h2>${fila[1]}</h2</td>
                <td><button id="R${i}" value="${i}">Seleccionar</button></td>
            </tr>`;
        $("#general").append(plan);
        id.push("p" + i);
    }


    $("button").bind("click",function() 
    {
        var val = $(this).val();
        var indice = id.indexOf('p' + val);
        id.splice(indice, 1);
        dt.splice(indice, 1);
        
        $("#basura").bind("click",function()
        {
            localStorage.setItem("productos", JSON.stringify(dt));
            $("#p" + val).remove();       
        });
    });
    
    var aux = localStorage.getItem("listado");
    if (aux === null) {
        var xd = [];
        localStorage.setItem("historial", JSON.stringify(xd));
    }
    var guard = JSON.parse(localStorage.getItem("listado"));
    console.log(guard);

    $("#comprar").bind("click",function () 
    {
        var prod = [];
        for (var i = 0; i < dt.length; i++) {
            var datos = dt[i].toString().split(',');
            var el = {"producto": datos[0], "precio": datos[1]};
            prod.push(el);
        }

        if (prod.length !== 0) {
            var c = confirm("Desea realizar el pago");
            if (c) {
                var f = new Date();
                var fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

                var pago = {
                    "fecha": fecha
                };

                guard.push(pago);
                localStorage.setItem("listado", JSON.stringify(guard));
                console.log(guard);
                cancelar();
                alert("Compra realizada con exito, para seguir comprando regrese a la lista de productos :)");
            }
        } else {
            alert("No hay productos en carro");
        }
    }); 
});
