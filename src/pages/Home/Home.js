import Barba from 'barba.js';
import { commonComponents } from '../../common/js/commonComponents';

Barba.BaseView.extend({
    namespace: 'Home',
    onEnter() {

    },
    async onEnterCompleted() {
        await commonComponents.preloader.preloading;
    },
    onLeave() {

    },
    onLeaveCompleted() {

    },
}).init();
