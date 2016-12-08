module.exports = {
    '/index': {
        name: 'index',
        doc_title: '首页',
        component: require('./index.vue'),
        depth: 10
    },
    '/about': {
        name: 'about',
        doc_title: '关于',
        component: require('./about.vue'),
        depth: 10
    },
    '/test': {
        name: 'test',
        doc_title: '测试页',
        component: require('./test.vue'),
        depth: 10
    },
    '/components/message': {
        name: 'message',
        doc_title: '消息框',
        component: require('./components/message.vue'),
        depth: 20
    },
    '/components/radio': {
        name: 'radio',
        doc_title: '单选框',
        component: require('./components/radio.vue'),
        depth: 20
    },
    '/components/checkbox': {
        name: 'checkbox',
        doc_title: '复选框',
        component: require('./components/checkbox.vue'),
        depth: 20
    },
    '/components/spinner':{
        name: 'test',
        doc_title: 'test',
        component: require('./components/spinner.vue'),
        depth: 20
    }
};