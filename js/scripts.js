const projetos = [
    {
        nome: "Mestre da Tabuada",
        descricao: "Projeto desenvolvido em C# utilizando a Game Engine Unity, com o objetivo de incentivar o interesse das crianças pela matemática.",
        link: "https://github.com/CRLS26/Mestre-da-Tabuada"
    },
    {
        nome: "AutoBKP",
        descricao: "Script de backup automático local para Windows que realiza cópias de segurança das principais pastas do usuário.",
        link: "https://github.com/CRLS26/AutoBKP"
    },
    {
        nome: "PyDF",
        descricao: "Manipulador de PDF que permite aos usuários realizar diversas operações com arquivos PDF de forma simples e eficiente.",
        link: "https://github.com/CRLS26/PyDF"
    },
    {
        nome: "Correção Movere",
        descricao: "Programa feito para corrigir erros do ERP Movere.",
        link: "https://github.com/CRLS26/Correcao-Movere"
    },
    {
        nome: "PyUnlocker",
        descricao: "Conjunto de scripts que permite a geração de códigos de desbloqueio para acesso a um programa protegido.",
        link: "https://github.com/CRLS26/PyUnlocker"
    },
    {
        nome: "NoMoreClutter",
        descricao: "Utilitário de limpeza e otimização para Windows, projetado para manter seu sistema eficiente e organizado.",
        link: "https://github.com/CRLS26/NoMoreClutter"
    },
    {
        nome: "CertiPy",
        descricao: "Gerenciador de certificados digitais que permite aos usuários instalar, listar e desinstalar certificados de forma simples e intuitiva.",
        link: "https://github.com/CRLS26/CertiPy"
    }
];

const listaProjetos = document.getElementById('lista-projetos');

projetos.forEach(projeto => {
    const projetoDiv = document.createElement('div');
    projetoDiv.classList.add('projeto');

    projetoDiv.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.disabled ? '#' : projeto.link}" 
           class="btn ${projeto.disabled ? 'disabled' : ''}" 
           ${projeto.disabled ? 'onclick="return false;"' : 'target="_blank" rel="noopener noreferrer"'}>
            ${projeto.disabled ? 'Em desenvolvimento' : 'Ver no GitHub'}
        </a>
    `;

    listaProjetos.appendChild(projetoDiv);
});

function navigateToMain() {
    const landing = document.getElementById('landing');
    const mainContent = document.getElementById('mainContent');
    
    landing.style.opacity = '0';
    setTimeout(() => {
        landing.style.display = 'none';
        mainContent.classList.add('active');
    }, 500);
}

function closeLanding() {
    const landingPage = document.querySelector('.landing-page');
    const mainContent = document.querySelector('.main-content');
    
    landingPage.style.opacity = '0';
    landingPage.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        landingPage.style.display = 'none';
        mainContent.style.display = 'block';
    }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    particlesJS("landing-particles", {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            }
        },
        retina_detect: true
    });
});