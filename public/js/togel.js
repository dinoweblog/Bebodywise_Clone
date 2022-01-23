function helloGuys(){

    document.getElementById("rotate").classList.toggle("hello")
   let div = document.getElementById("downy")
   div.classList.toggle("show")
   
  



}
function helloGuys2(){

document.getElementById("rotate1").classList.toggle("hello")
let div = document.getElementById("downy2")
div.classList.toggle("show")
let Mndiv= document.getElementById("hi")
let adrDiv= document.getElementById("Adres")
Mndiv.classList.toggle("hi")
adrDiv.classList.toggle("hi1")




}
function helloGuys3(){

document.getElementById("rotate3").classList.toggle("hello")
let div = document.getElementById("downy3")
div.classList.toggle("show")




}


function Paytmddwn(){

document.getElementById("rotate4").classList.toggle("rypi")
let div = document.getElementById("Paytm-dwn")
div.classList.toggle("show")



}
function Paytmddwn1(){

document.getElementById("rotate5").classList.toggle("rypi")
let div = document.getElementById("Paytm-dn1")
div.classList.toggle("show")



}
function Paytmddwn2(){

document.getElementById("rotate6").classList.toggle("rypi")
let div = document.getElementById("Paytm-dn2")
div.classList.toggle("show")



}

function Paytmddwn3(){
document.getElementById("rotate7").classList.toggle("rypi")
let div = document.getElementById("Paytm-dn4")
div.classList.toggle("show")
}

function Paytmddwn4(){
document.getElementById("rotate8").classList.toggle("rypi")
let div = document.getElementById("Paytm-dn5")
div.classList.toggle("show")
}


function Paytmddwn5(){
document.getElementById("rotate9").classList.toggle("rypi")
let div = document.getElementById("Paytm-dn6")
div.classList.toggle("show")
}


function Paytmddwn6(){
document.getElementById("rotate10").classList.toggle("rypi")
let div = document.getElementById("Paytm-dn7")
div.classList.toggle("show")
}



function Paytmddwn7(){
document.getElementById("rotate11").classList.toggle("rypi")
let div = document.getElementById("Paytm-dn8")
div.classList.toggle("show")
}


function Paytmddwn8(){
document.getElementById("rotate12").classList.toggle("rypi")
let div = document.getElementById("Paytm-dn9")
div.classList.toggle("show")
}






// .....................................................................

function Sidebox2(){
    document.getElementById("rtat2").classList.toggle("rypi")
    let div = document.getElementById("hd-cn")
    div.classList.toggle("show")
    }

    function Sidebox1(){
        document.getElementById("rtat1").classList.toggle("hello")
        let div = document.getElementById("mn-dv-hd")
        div.classList.toggle("show")
        div.classList.toggle("sd-height")
        }
    

        
    function Sidebox3(){
        document.getElementById("rtat3").classList.toggle("rypi")
        let div = document.getElementById("hd-cn2")
        div.classList.toggle("show")
        }
    
        let Upid;
       function updateadr(event){
       
         
        let x=event.currentTarget
        let y=x.previousSibling.parentNode.childNodes[3].id
        Upid=y
       
        console.log(x)
        console.log(y)
        
       

        
         document.getElementById("update-div").style.display="flex"
    
        
       }
    

    //    document.getElementById("crcl-cls").addEventListener("click",skip)



       function skip(){
        document.getElementById("update-div").style.display="none"
       }


       function saved(){
           console.log(this)
            // e.preventdefault()
           
        var arr = document.getElementById("dlvr-adr").value
        var pin = document.getElementById("dlvr-pin").value 
        var city=document.getElementById("dlvr-city").value 
        var state=document.getElementById("dlvr-state").value
        document.getElementById("grey1").innerText="Delivering to "+arr+', '+city+", "+state+", IN , "+pin
        document.getElementById(Upid).innerText=arr+', '+city+", "+state+", IN , "+pin
        
        document.getElementById("update-div").style.display="none"
        
        return false;
       }

       let Newadr=4
       function Address(){
          let Addr=document.getElementById("ad-adr").value
          let pin=document.getElementById("ad-pin").value
          let city =document.getElementById("ad-city").value
          let state=document.getElementById("ad-state").value
          console.log(Addr,pin,city,state)
           
          let Addr_add={
              "Addr":Addr,
              "pin":pin,
              "city":city,
              "state":state
          }



          console.log(Addr_add)



          let main_div= document.createElement("div")
          main_div.setAttribute("id","inpt-div"+Newadr)

          let input= document.createElement("input")
          input.setAttribute("id",Newadr)
          input.setAttribute("type","radio")
          input.setAttribute("data-preference",Newadr)
          input.setAttribute("class","html")
          
         let label = document.createElement("label")
         label.setAttribute("for",Newadr)
         label.setAttribute("id","second-label"+Newadr)
         label.setAttribute("class","adr-input")

         let edtdiv=document.createElement("div")
         edtdiv.setAttribute("id","edit"+Newadr)
         edtdiv.setAttribute("class","edt-dv")
         edtdiv.setAttribute("class","editfunc")
         let edth4= document.createElement("h4")
         edth4.setAttribute("class","edt")
        //   edtdiv.onclick=updateadr1()
        
         edth4.innerText="Edit"

         edtdiv.append(edth4)

        
       
     
        

         
          
       var Adadr = JSON.parse(localStorage.getItem("Adadr") || "[]");
        
       Adadr.push(Addr_add);
       localStorage.setItem("Adadr", JSON.stringify(Adadr));
       let  v =document.getElementById("edit4")
            
       console.log(v,Newadr)
      
    //    localStorage.clear()
         
            Adadr.map(function(items){

               

                document.getElementById("second-label").innerText=items.Addr+', '+items.city+", "+items.state+", IN , "+items.pin


                    Newadr++
                    // localStorage.clear()
                
            })

        
            document.getElementById("inpt-div2").style.display="block"
            document.getElementById("New-ad").style.display="none"
        
           
          
    }



    function showForm(){
        console.log("here")
        document.getElementById("New-ad").style.display="block"
      
    }
   
            
  
 function addtodiv(event){
     document.getElementById("grey1").innerText=null
    let x=event.target.innerText
    

   var y = document.getElementById("grey1").innerText="Delivering to " +x

   


 }
    

       


  

