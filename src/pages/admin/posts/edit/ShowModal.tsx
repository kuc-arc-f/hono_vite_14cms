import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//import MicroModal from 'micromodal';
//const MODAL_NAME= "post_show_modal";
//
const ShowModal: FC<{}> = (props: any) => {
console.log("#ShowModal");
//console.log(props.item);
  return (
  <div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="modal__header">
        <h1 class="text-4xl font-bold" id="modal-1-title">Micromodal
        </h1>
        <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
        </header>
        <main class="modal__content" id="modal-1-content">
          <div id="show_modal_content"></div>
        </main>
        <footer class="modal__footer">
        {/* <button class="modal__btn modal__btn-primary">Continue</button> */}
        <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
        </footer>
    </div>
    </div>
    <style>{`
    .modal__container {
      min-width: 1024px;
      min-height: 600px;
    }
    .modal__content{
      min-height: 400px;
    }
    `}</style>
  </div>
  )
}
export default ShowModal;
/*
class="modal__title"
*/
