var tasks=[]
var display=document.getElementById("display");
var lists=document.getElementById("lists");
var count=document.getElementById("count");
display.addEventListener('keyup',add);
function render(obj)
{
    if(typeof(obj)=="object")
    {
        task=obj;
        count.innerHTML= `Total Tasks :${tasks.length}`;
        var list=document.createElement('li');
        list.innerHTML=`<div id ="${task.id}"  class="item"><input class="check" type="checkbox">  <span> ${task.text}</span> <input class="delete" data="${task.id}" type="button" value="Delete"> </div>`
        lists.appendChild(list);
        showNotification("Task added successfully");
    }
    else
    {
        id=obj;
        count.innerHTML= `Total Tasks :${tasks.length}`;
        var task=document.getElementById(id);
        task.remove();
        showNotification("Task deleted successfully");
    }
  
}
function showNotification(text)
{
    alert(text);
}
function Delete(id)
{
    console.log(id);
    console.log(tasks);
   var newTasks=tasks.filter((task)=>task.id!==id);
   tasks=newTasks;
   render(id);
}
function add(event)
{
    if(event.key==="Enter")
    {
        if(display.value=="")
        {
        showNotification("Empty Task cant be added");
        return;
        }
     var task={
       text:display.value,
       id:Date.now().toString(),
       }
       tasks.push(task);
       event.target.value="";
       render(task);
    }
}
lists.addEventListener('click',handleClick);
function handleClick(e)
{
    var target=e.target;
    if(target.className==="delete")
    {
        let id=target.getAttribute("data");
        Delete(id);
    }
}