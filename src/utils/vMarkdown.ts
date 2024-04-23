import type {Directive} from "vue";

import markdownit from 'markdown-it'


const md = markdownit()


const vMarkdown: Directive = {
    mounted(el, binding) {
        const {value} = binding
    },
    updated(el, binding) {
        const {value} = binding
        console.log('update', value)
        const mdStr = md.render(value.data)
        el.innerHTML = mdStr
    }
}

export {
    vMarkdown
}
