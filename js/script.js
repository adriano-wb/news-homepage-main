const menu = document.getElementsByClassName("menu-list");
const btnAbrirMenu = document.getElementById("btnAbrirMenu");
const btnFecharMenu = document.getElementById("btnFecharMenu");
const fundoEscuroMenu = document.getElementsByClassName("fundo-escuro-menu");
const menuItemLista = document.getElementsByClassName("menu-item");

function abrirMenuResponsivo() {
	menu[0].classList.add("menu-list-aberto");
	menu[0].classList.remove("menu-list-fechar");
	fundoEscuroMenu[0].style.display = "block";
	fundoEscuroMenu[0].classList.remove("fundo-escuro-close");
	fundoEscuroMenu[0].classList.add("fundo-escuro-open");
	
	// Condição para verificar se o navegador suporta o método addEventListener
	if (document.addEventListener) {
		fundoEscuroMenu[0].removeEventListener("animationend", removerFundoEscuro);
	} else {
		fundoEscuroMenu[0].detachEvent("onanimationend", removerFundoEscuro);
	}
	
	for (let i = 0; i < menuItemLista.length; i++) {
		menuItemLista[i].classList.add("menu-item-responsive");
		menuItemLista[i].classList.remove("menu-item-close");
	}
}
	
function removerFundoEscuro() {
	fundoEscuroMenu[0].style.display = "none";
}

function fecharMenuResponsivo() {
	menu[0].classList.add("menu-list-fechar");
	menu[0].classList.remove("menu-list-aberto");
	fundoEscuroMenu[0].classList.remove("fundo-escuro-open");
	fundoEscuroMenu[0].classList.add("fundo-escuro-close");
	
	// Condição para verificar se o navegador suporta o método addEventListener
	if (document.addEventListener) {
		fundoEscuroMenu[0].addEventListener("animationend", removerFundoEscuro);
	} else {
		fundoEscuroMenu[0].attachEvent("onanimationend", removerFundoEscuro);
	}
	
	for (let i = 0; i < menuItemLista.length; i++) {
		menuItemLista[i].classList.remove("menu-item-responsive");
		menuItemLista[i].classList.add("menu-item-close");
	}
}

// Condição para verificar se o navegador suporta o método addEventListener
if (document.addEventListener) {
	btnAbrirMenu.addEventListener("click", abrirMenuResponsivo);
	btnFecharMenu.addEventListener("click", fecharMenuResponsivo);
	fundoEscuroMenu[0].addEventListener("click", fecharMenuResponsivo);
} else {
	btnAbrirMenu.attachEvent("onclick", abrirMenuResponsivo);
	btnFecharMenu.attachEvent("onclick", fecharMenuResponsivo);
	fundoEscuroMenu[0].attachEvent("onclick", fecharMenuResponsivo);
}