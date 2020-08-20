import { observable, action, decorate } from 'mobx'

export default class MainStore {
  href = document.location.pathname
  redirect = 'lol'
  menuActive = false

  setHref(el) {
    this.href = el
  }
  setRedirect(el) {
    this.redirect = el
  }
  setMenuActive(el) {
    this.menuActive = el
  }
}

decorate(MainStore, {
  auth: observable,
  setHref: action,

  redirect: observable,
  setRedirect: action,

  menuActive: observable,
  setMenuActive: action,
})
