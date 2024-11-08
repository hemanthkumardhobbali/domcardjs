var container=document.querySelector ("div")

var card=document.createElement("div")
card.id="cardname"
card.innerHTML=`
<img src="https://www.akc.org/wp-content/uploads/2017/12/Nova-Scotia-Duck-Tolling-Retriever.jpg" width="300"/>
<h4> Nova Scotia Duck Tolling Retriever </h4>
<button> seemore </button> 
`
card.style.border="2px solid black"
card.style.backgroundColor="lightgreen"
card.style.display="inline-block"
card.style.padding="15px"
card.style.textAlign="center"

container.appendChild(card)


var newcard=document.createElement("div")
newcard.id="newcardname"
newcard.innerHTML=`
<img src="https://americanpregnancy.org/wp-content/uploads/2012/05/roller_coasters_and_pregnancy-1.jpg" width="300"/>
<h4> Roller Coasters While Pregnant </h4>
<button> seemore </button> 
`
newcard.style.border="2px solid black"
newcard.style.backgroundColor="lightgreen"
newcard.style.display="inline-block"
newcard.style.padding="15px"
newcard.style.textAlign="center"

container.appendChild(newcard)

container.style.display="flex"
container.style.gap="20px"








var divcontainer=document.querySelector ("div")

var cardd=document.querySelector("p")
cardd.id="cardname"
cardd.innerHTML=` 
<img src="https://cdn.wallpapersafari.com/89/18/XU6N8r.jpg" width="280px"/>
<p> this is image osf roll<p/>
<button>seemore</button>
`
cardd.style.border="2px solid black"
cardd.style.backgroundColor="lightblue"
cardd.style.display="inline-block"
cardd.style.padding="15px"
cardd.style.textAlign="center"

divcontainer.appendChild(cardd)


var newcardd=document.createElement("p")
newcardd.id="newcardname"
newcardd.innerHTML=` 
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCWxlATW_r56Y95ASsQhZCTJnvv_JNkJgSA&s" width="300px"/>
<p> this is image osf roll<p/>
<button>seemore</button>
`

newcardd.style.border="2px solid black"
newcardd.style.backgroundColor="lightblue"
newcardd.style.display="inline-block"
newcardd.style.padding="15px"
newcardd.style.textAlign="center"

divcontainer.appendChild(newcardd)


divcontainer.style.display="flex"
divcontainer.style.gap="20px"
