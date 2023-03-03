const Api= (()=>{
    const getTodoList=()=>{
        return fetch("https://jsonplaceholder.typicode.com/todos").then((res)=> res.json() )
    }
    return {getTodoList}
})()

const View=(()=>{
    const domSelector={
        inputForm:document.querySelector("#input"),
        addBtn:document.querySelector("#add"),
        task_container:document.querySelector("#task_container")
    }

    const createTemplate=(data)=>{
        let temp=""
        for(let item of data){
            temp+=`<input type="checkbox" id="check_${item.id}"><label for="check_${item.id}" class="strikethrough"> ${item.title}
            <span>
                <button id="todoBtn_${item.id}">x</button>
            </span></label><br>`
        }
        return temp;
    }

    const render=(element,template)=>{
        element.innerHTML=template
    }

    return {domSelector,
        createTemplate,
        render
    }
})()

const Model=((api,view)=>{
    const {getTodoList}=api
    const {createTemplate,render}=view
    const task_container=document.querySelector("#task_container")

    class State{
        constructor(){
            this._dataList=[]
        }

        get dataList(){
            return this._dataList
        }

        set dataList(newList){
            this._dataList=newList
            const temp=createTemplate(this._dataList)
            render(task_container,temp)
        }
    }

    return {createTemplate,
        render,
        getTodoList,
        State
    }

})(Api,View)

const Controller=((model,view)=>{
    const {getTodoList,State}=model
    const {domSelector,createTemplate,render}=view
    const state=new State()

    domSelector.addBtn.addEventListener('click',()=>{
        const newList=[...state.dataList,{title:domSelector.inputForm.value,id:Math.floor(Math.random()*200)}]
        state.dataList=newList
    })

    domSelector.task_container.addEventListener('click',(event)=>{
        // console.log(typeof event.target.id)
        const id=event.target.id
        let x=id.split("_")
        // console.log(x[0])
        if(x[0]=="todoBtn"){
            const newList=[...state.dataList.filter((item)=>'todoBtn_'+item.id !=id)]
            state.dataList=newList
        }
        else if(x[0]=="check"){
            event.target.setAttribute('style','color:green')
        }
    })

    const bootstrap=()=>{
        getTodoList().then(
            (res)=>{
            state.dataList=res.slice(0,5)
        })
    }
    
    return {bootstrap}
})(Model,View)

Controller.bootstrap()