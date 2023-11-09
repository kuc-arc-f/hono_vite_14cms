
//@ts-ignore
console.log("#AdminPostEdit.client.ts", TaskItemId);
//
const AdminPostEdit = {
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
            let contentValue = "";
            const title = document.querySelector("#title") as HTMLInputElement;
            if(title) {
                titleValue = title.value;
            }
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
console.log(item);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/posts/update", {
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
     *
     * @param
     *
     * @return
     */
    delete : async function()
    {
        try{
            let ret = false;
            const item = {
                api_key: "",
                //@ts-ignore
                id: Number(TaskItemId),
            }
//console.log("title=", titleValue);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/posts/delete", {
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
            console.error("Error, delete");
            console.error(e);
            throw new Error('Error , delete');
        }
    },
    /**
     *
     * @param
     *
     * @return
     */  
    startProc :async function ()
    {
        try{
            console.log("#startProc");
            //btn
            const button = document.querySelector('#btn_delete') as HTMLElement;
            button.addEventListener('click', async () => {
//console.log("btn_delete=");
                const result = await this.delete();
console.log("result=", result);
                if(result === true) {
                    window.location.href = '/admin/posts';
                }
            }); 
            //
            const saveButton = document.querySelector('#btn_save') as HTMLElement;
            saveButton.addEventListener('click', async () => {
//console.log("btn_delete=");
                const result = await this.update();
console.log("result=", result);
                if(result === true) {
                    window.location.href = '/admin/posts';
                }
            }); 
        } catch (e) {
            console.error(e);
        }    
    },
}
AdminPostEdit.startProc();
