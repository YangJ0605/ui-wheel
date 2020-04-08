const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/row_col/row.vue'
import Col from '../src/components/row_col/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.exist
  })

  it('接收gutter属性', (done) => {
    Vue.component('c-row', Row)
    Vue.component('c-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <c-row gutter="20">
      <c-col span="12"></c-col>
      <c-col span="12"></c-col>
    </c-row>
    `
    const vm = new Vue({
      el:div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      done() //执行异步
      vm.$el.remove()
      vm.$destroy()
    })
  })

  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'left'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-start')
    div.remove()
    vm.$destroy()
  })
})