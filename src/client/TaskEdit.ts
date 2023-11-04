
//@ts-ignore
console.log("#TaskEdit.client=", TaskItemId);
//
const TaskEdit = {
    /**
     *
     * @param
     *
     * @return
     */  
    update: async function()
    {
        try{
            let ret = false;
            let titleValue = "";
            const title = document.querySelector("#title") as HTMLInputElement;
            if(title) {
                titleValue = title?.value;
            }
            let contentValue = "";
            const content = document.querySelector("#content") as HTMLInputElement;
            if(content) {
                contentValue = content.value;
            }            
            const item = {
                //@ts-ignore
                id: Number(TaskItemId),
                title: titleValue,
                content: contentValue,
            }
//console.log(item);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/tasks/update", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                return ret;
            }
            ret = true;
            return ret;
        } catch (e) {
            console.error("Error, addItem");
            console.error(e);
            throw new Error('Error , addItem');
        }
    },  
    /**
     * startProc
     * @param
     *
     * @return
     */   
    startProc :async function ()
    {
        try{
console.log("#startProc");
            const button = document.querySelector('#btn_save') as HTMLElement;
            button.addEventListener('click', async () => {
console.log("btn_save=");
                const result = await this.update();
console.log("result=", result);
                if(result === true) {
                    window.location.href = '/tasks';
                }
            }); 
        } catch (e) {
            console.error(e);
        }    
    },
}
TaskEdit.startProc();
