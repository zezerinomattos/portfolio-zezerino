import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

// My Imports
import './style.css';
import Navbar from '../../components/Navbar';
import LinksPortfolio from '../../components/LinksPortfolio';
import Footer from '../../components/Footer';

// MY IMAGES PRIMEIRO PROJETO
import primProjImg001 from '../../assets/portfolio-img001.png';
import primProjImg002 from '../../assets/portfolio-img002.png';
import primProjImg003 from '../../assets/portfolio-img003.png';
import primProjImg004 from '../../assets/portfolio-img004.png';
import primProjImg005 from '../../assets/portfolio-img005.png';
import primProjImg006 from '../../assets/portfolio-img006.png';

// MY IMAGES PRIMEIRO PROJETO
import segProjImg001 from '../../assets/portfolio-seg001.png';
import segProjImg002 from '../../assets/portfolio-seg002.png';
import segProjImg003 from '../../assets/portfolio-seg003.png';
import segProjImg004 from '../../assets/portfolio-seg004.png';
import segProjImg005 from '../../assets/portfolio-seg005.png';
import segProjImg006 from '../../assets/portfolio-seg006.png';

// MY IMAGES PRIMEIRO PROJETO
import terProjImg001 from '../../assets/portfolio-terc001.png';
import terProjImg002 from '../../assets/portfolio-terc002.png';
import terProjImg003 from '../../assets/portfolio-terc003.png';
import terProjImg004 from '../../assets/portfolio-terc004.png';
import terProjImg005 from '../../assets/portfolio-terc005.png';
import terProjImg006 from '../../assets/portfolio-terc006.png';

export default function Portfolio(){

    //URL PORTFOLIO
    const urlLinkPortfolio001 = 'https://github.com/zezerinomattos/loja_nanda_fashion';

    const urlLinkPortfolio002 = 'https://github.com/zezerinomattos/unitedsoftware';

    const urlLinkPortfolio003 = 'https://nandafashionn.com/';

    // URL MAIS 
    const urlLinkMais001 = 'https://github.com/zezerinomattos/todo-projeto-fullstack-node-react';
    const urlLinkMais002 = 'https://github.com/zezerinomattos/ocornnerconsultoria';
    const urlLinkMais003 = 'https://github.com/zezerinomattos/bot_whatsApp_python';
    const urlLinkMais004 = 'https://github.com/zezerinomattos/Sistema-Controle-Vendas-Em-Java';
    const urlLinkMais005 = 'https://github.com/zezerinomattos/ToDo-Mobile-ReactNative';
    const urlLinkMais006 = 'https://github.com/zezerinomattos';

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return(
        <>
            <header className='header-portfolio'>
                <Navbar />   
                <div className='header-textos'>
                    <h1>PORTF??LIO</h1>
                    <span>Preparei esta se????o com alguns de meus projetos.</span>
                </div>
            </header>

            <section data-aos='fade-up' className='primeiro-projeto'>
                <div className='projeto-prim-container'>
                    <h2>Site de vendas React.js + Firebase + Bootstrap</h2>
                    <p>
                    Apresento-lhes um e-commerce inovador, que permite aos usu??rios visualizar com detalhes os produtos dispon??veis e finalizar suas compras diretamente com o vendedor atrav??s da integra????o do aplicativo de mensagens WhatsApp. Esse projeto foi desenvolvido com o objetivo de oferecer uma experi??ncia de compra simples e eficiente para os usu??rios. <br/> <br/>

                        Por outro lado o vendedor pode fazer: <br/>
                        [????] Autentica????o de Usu??rios <br/>
                        [????] Recupera????o de senha com envio de e-mail autom??tico <br/>
                        [????] Cadastro de Usu??rios <br/>
                        [????] Publicar, editar, remover e pesquisar produtos para usu??rios logados. <br/>
                        [????] Pesquisa de produtos para usu??rios visitantes <br/>
                        [????] Quantidade de Visualiza????es de um Produtos <br/>
                        [????] Upload de imagem <br />
                        [????] Layout responsivo (se ajusta ao tamanho da tela) 
                    </p>
                
                    <div className='img-superior'>
                        <div className='img001'>
                            <img src={primProjImg001} alt="" />
                        </div>
                        <div className='img002'>
                            <img src={primProjImg002} alt="Projetos" />
                        </div>
                        <div className='img001'>
                            <img src={primProjImg003} alt="Projetos" />
                        </div>
                    </div>
                    <div className='img-inferior'>
                        <div className='img001'>
                            <img src={primProjImg004} alt="Projetos" />
                        </div>
                        <div className='img001 centro'>
                            <img src={primProjImg005} alt="Projetos" />
                        </div>
                        <div className='img001'>
                            <img src={primProjImg006} alt="Projetos" />
                        </div>
                    </div>

                    <div className='preview-git'>
                        <span>
                            Convido voc?? a conhecer o c??digo clicando no link (Leia Mais...) do Overview do projeto no meu reposit??rio remoto GitHub.
                        </span>
                        <LinksPortfolio url={urlLinkPortfolio001}/>
                    </div>
                </div>
            </section>

            <section className='segundo-projeto'>
                <div className='projeto-seg-container'>
                        <h2>Site Corporativo React.js</h2>
                        <p>
                            Apresento-lhes um site corporativo impactante para uma empresa prestadora de servi??os, que oferece uma apresenta????o elegante e criativa da empresa e de seus servi??os. Com um design moderno e intuitivo, este site ?? a plataforma ideal para apresentar a empresa ao mundo e atrair novos clientes. Al??m disso, o site foi constru??do com a tecnologia avan??ada React.js, garantindo uma experi??ncia de usu??rio r??pida e fluida. <br /> <br/>

                            [????] Projeto feito em React.js <br />
                            [????] Layout desenhado e prototipado no Figma <br />
                            [????] F??cil navega????o <br /> 
                            [????] Estrutura com Clean Code para f??cil manuten????o <br />
                            [????]Imagens trabalhadas no Photoshop <br />
                            [????] Layout responsivo (se ajusta ao tamanho da tela) <br />
                        </p>
                    
                        <div className='img-superior'>
                        <div className='img001'>
                            <img src={segProjImg001} alt="" />
                        </div>
                        <div className='img002'>
                            <img src={segProjImg002} alt="" />
                        </div>
                        <div className='img001'>
                            <img src={segProjImg003} alt="" />
                        </div>
                    </div>
                    <div className='img-inferior'>
                        <div className='img001'>
                            <img src={segProjImg004} alt="" />
                        </div>
                        <div className='img001 centro'>
                            <img src={segProjImg005} alt="" />
                        </div>
                        <div className='img001'>
                            <img src={segProjImg006} alt="" />
                        </div>
                    </div>

                    <div className='preview-git'>
                        <span>
                            Convido voc?? a conhecer o c??digo clicando no link (Leia Mais...) do Overview do projeto no meu reposit??rio remoto GitHub.
                        </span>
                        <LinksPortfolio url={urlLinkPortfolio002}/>
                    </div>
                        
                </div>
            </section>

            <section data-aos='fade-up' className='terceiro-projeto'>
                <div className='projeto-ter-container'>
                        <h2>Loja Online Wordpress</h2>
                        <p>
                            Apresento-lhes um projeto de e-commerce desenvolvido utilizando a plataforma Wordpress, que oferece uma experi??ncia de compra completamente automatizada e sem a necessidade de intera????o com um vendedor. Com uma interface intuitiva e f??cil de usar, este projeto demonstra minhas habilidades em desenvolvimento de lojas online e automa????o de processos de compra. <br /> <br/>

                            [????] Atendimento de forma automatizada e 24h por dia <br/>
                            [????] Integra????o com Mercado Pago <br/>
                            [????] F??cil navega????o <br/>
                            [????] Landing Page criativa e pensada para atrair clientes <br/>
                            [????]Imagens trabalhadas no Photoshop <br/>
                            [????] Layout responsivo (se ajusta ao tamanho da tela) <br/>
                        </p>
                    
                        <div className='img-superior'>
                        <div className='img001'>
                            <img src={terProjImg002} alt="" />
                        </div>
                        <div className='img002'>
                            <img src={terProjImg001} alt="" />
                        </div>
                        <div className='img001'>
                            <img src={terProjImg003} alt="" />
                        </div>
                    </div>
                    <div className='img-inferior'>
                        <div className='img001'>
                            <img src={terProjImg004} alt="" />
                        </div>
                        <div className='img001 centro'>
                            <img src={terProjImg005} alt="" />
                        </div>
                        <div className='img001'>
                            <img src={terProjImg006} alt="" />
                        </div>
                    </div>

                    <div className='site-integra'>
                        <span>
                            Convido voc?? a conhecer a loja na ??ntegra clicando no link (Leia Mais...).
                        </span>
                        <a href={urlLinkPortfolio003}>Leia Mais...</a>
                    </div>
                        
                </div>
            </section>

            <section data-aos='fade-up' className='mais-projetos'>
                <h2>Veja Mais Projetos</h2>
                <span>
                    Eu convido voc?? a conhecer mais sobre os projetos em meu portf??lio. Para evitar que <br/> meu site fique grande e pesado, estou compartilhando com voc?? apenas uma sele????o dos meus <br/> projetos no GitHub. Para ver ainda mais projetos, basta clicar no link ao final que o levar?? <br/> diretamente ?? raiz de meu reposit??rio. Aqui voc?? encontrar?? uma vis??o geral de cada um deles.
                </span>
                <div className='mais-overviews'>
                    <LinksPortfolio url={urlLinkMais001}/>
                    <LinksPortfolio url={urlLinkMais005}/>
                    <LinksPortfolio url={urlLinkMais002}/>
                    <LinksPortfolio url={urlLinkMais003}/>
                    <LinksPortfolio url={urlLinkMais004}/>
                    <LinksPortfolio url={urlLinkMais006}/>
                </div>
            </section>

            <Footer />
        </>
    );
}