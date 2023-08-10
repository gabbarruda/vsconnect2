import "./style.css"

import Logo from "../../assets/img/logo.svg"
import Dev from "../../assets/img/dev.png"
import Facebook from "../../assets/img/facebook.svg"
import Instagram from "../../assets/img/instagram.svg"
import Linkedin from "../../assets/img/linkedin.svg"


function Footer () {

    function mostrarMenu() {
        let menu = document.getElementById("menu_links") as HTMLCanvasElement; // Obtém o elemento do menu pelo ID
        let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
        let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID
    
        let body: any = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)
    
        if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
            menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
            sombra.style.right = "-10vw"; // Move a sombra para a direita
            menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
            menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
            body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
        } else {
            menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
            sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
            menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
            menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
            body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
        }
        menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
    }
    return (
        <>
        <footer>
        <div className="container rodape">
            <div className="span_dicas">
                <img src={ Dev } alt=""/>
                <div className="span_dicas_texto">
                    <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                        recomendações para saber mais.</p>
                    <a className="botao botao_dicas" href="#">mais dicas</a>
                </div>
            </div>
            <div className="rodape_conteudo">
                <div className="rodape_conteudo_paginas">
                    <h2>Páginas</h2>
                    <ul>
                        <li>Login</li>
                        <li>Home</li>
                        <li>Listar Serviços</li>
                        <li>Cadastrar Cliente</li>
                        <li>Cadastrar Desenvolvedor</li>
                    </ul>
                </div>
                <img src={ Logo } alt=""/>
                <div className="rodape_conteudo_contatos">
                    <h2>Contatos</h2>
                    <div>
                        <a href="#"><img src={ Facebook } alt=""/></a>
                        <a href="#"><img src={ Instagram } alt=""/></a>
                        <a href="#"><img src={ Linkedin } alt=""/></a>
                    </div>
                    <a href="mailto:">contato@vsconnect.com</a>
                </div>
            </div>
            <p>todos os direitos reservados ©.</p>
        </div>
        </footer>
        </>
       )
    
}
export default Footer 