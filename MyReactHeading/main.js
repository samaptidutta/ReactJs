function customRender(myEle,ele){
    const domEle = document.createElement(myEle.type)
    console.log(domEle);
    
    domEle.innerHTML=myEle.val;
    ele.appendChild(domEle)
}


const myEle = {
    type:'h1',
    val:'Hello World!'
}



const ele = document.querySelector("#root")

customRender(myEle,ele);