// const api={
    // score:0,
    // currentState:0,
    // time:30
// }
var score=0
var currentState=0
var time=30
const View=(()=>{
    const domSelector={
        score:document.querySelector("#score"),
        startBtn:document.querySelector("#start"),
        timeBoard:document.querySelector("#TimeBoard"),
        timer:document.querySelector("#timer"),
        dot:document.querySelectorAll(".dot"),
    }

    const createTemplate=(data)=>{
        let x=data.id
        return x;
    }

    const render=(element,template)=>{
        element.innerHTML=template
    }

    return {domSelector,
        createTemplate,
        render
    }
})()

const Model=((view)=>{
    const {createTemplate,render}=view
    const score=document.querySelector("#score")
    class State{
        constructor(){
            this._dataObject={id:0,state:false}
        }

        get dataObject(){
            return this._dataObject
        }

        set dataObject(data){
            this._dataObject=data
            const temp=createTemplate(this._dataObject)
            console.log(temp)
            render(score,temp)
        }
    }

    return {createTemplate,
        render,
        State
    }

})(View)

const Controller=((model,view)=>{
    const {State}=model
    const {domSelector,createTemplate,render}=view
    const state=new State()
    let max=3
    const start=(api)=>{
        // let {score,currentState,time}=api
        domSelector.dot.forEach(d => {
            d.addEventListener('click', () => {
                // console.log(d.getAttribute('id'))
                if (d.getAttribute('id') == currentState) {
                    document.getElementById("circle_"+currentState).style.visibility='hidden'
                    const newObj={id:++score,state:true}
                    state.dataObject=newObj
                }
            })
        });

        let startGame = setInterval(() => { 
            currentState = Math.floor(Math.random() * 12);
            document.getElementById("circle_"+currentState).style.visibility='visible'
            
            time--;
            timer.innerHTML = time;
            if (time === 0) { // time's up
                clearInterval(startGame); // stop the loop
                // we use setTimeout because without it, alert executes before time updates
                setTimeout(() => {
                    alert('Game Done! Refresh to restart.');
                    location.reload()

                }, 100);
            }
        }, 1000);
    }
    // const bootstrap=()=>{
    //     return domSelector.startBtn.addEventListener('click', start())
    // }
    domSelector.startBtn.addEventListener('click', start)
    // return {bootstrap}
})(Model,View)

// Controller.bootstrap()