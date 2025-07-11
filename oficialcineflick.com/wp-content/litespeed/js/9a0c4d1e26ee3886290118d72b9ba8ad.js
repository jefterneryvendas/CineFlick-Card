(() => {
    "use strict";
    class elementorHelloThemeHandler {
        constructor() {
            this.initSettings(), this.initElements(), this.bindEvents()
        }
        initSettings() {
            this.settings = {
                selectors: {
                    menuToggle: ".site-header .site-navigation-toggle",
                    menuToggleHolder: ".site-header .site-navigation-toggle-holder",
                    dropdownMenu: ".site-header .site-navigation-dropdown"
                }
            }
        }
        initElements() {
            this.elements = {
                window,
                menuToggle: document.querySelector(this.settings.selectors.menuToggle),
                menuToggleHolder: document.querySelector(this.settings.selectors.menuToggleHolder),
                dropdownMenu: document.querySelector(this.settings.selectors.dropdownMenu)
            }
        }
        bindEvents() {
            var e;
            !this.elements.menuToggleHolder || null !== (e = this.elements.menuToggleHolder) && void 0 !== e && e.classList.contains("hide") || (this.elements.menuToggle.addEventListener("click", (() => this.handleMenuToggle())), this.elements.dropdownMenu.querySelectorAll(".menu-item-has-children > a").forEach((e => e.addEventListener("click", (e => this.handleMenuChildren(e))))))
        }
        closeMenuItems() {
            this.elements.menuToggleHolder.classList.remove("elementor-active"), this.elements.window.removeEventListener("resize", (() => this.closeMenuItems()))
        }
        handleMenuToggle() {
            const e = !this.elements.menuToggleHolder.classList.contains("elementor-active");
            this.elements.menuToggle.setAttribute("aria-expanded", e), this.elements.dropdownMenu.setAttribute("aria-hidden", !e), this.elements.dropdownMenu.inert = !e, this.elements.menuToggleHolder.classList.toggle("elementor-active", e), this.elements.dropdownMenu.querySelectorAll(".elementor-active").forEach((e => e.classList.remove("elementor-active"))), e ? this.elements.window.addEventListener("resize", (() => this.closeMenuItems())) : this.elements.window.removeEventListener("resize", (() => this.closeMenuItems()))
        }
        handleMenuChildren(e) {
            const t = e.currentTarget.parentElement;
            null != t && t.classList && t.classList.toggle("elementor-active")
        }
    }
    document.addEventListener("DOMContentLoaded", (() => {
        new elementorHelloThemeHandler
    }))
})();