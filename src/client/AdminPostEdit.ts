import { marked } from 'marked';
import MicroModal from 'micromodal';

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
     * startProc
     * @param
     *
     * @return
     */   
    showProc:function(){
        let contentValue = "";
        const content = document.querySelector('#content') as HTMLInputElement;
        if(content) {
            contentValue = content?.value;
        }
        //console.log("contentValue=", contentValue);
        const pre_content_text = document.querySelector('#show_modal_content') as HTMLElement;
        const contentHTML = marked.parse(contentValue);
        pre_content_text.innerHTML = contentHTML;
        //modal-1-title
        let titleValue = "";
        const title = document.querySelector('#title') as HTMLInputElement;
        if(title) {
            titleValue = title?.value;
        }
        const modalTitle = document.querySelector('#modal-1-title') as HTMLElement
        modalTitle.innerHTML = titleValue;
        MicroModal.show('modal-1');
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
            const shoWButton = document.querySelector('#show_modal_btn') as HTMLElement;
            shoWButton?.addEventListener('click', async () => {
console.log("show_modal_btn=");
                this.showProc();
            }); 
        } catch (e) {
            console.error(e);
        }    
    },
}
AdminPostEdit.startProc();
