import React, { useEffect, useRef } from 'react';
import './SobreCasa.css';

export default function SobreCasaVerticalStrict() {
  const elementsRef = useRef([]);

  useEffect(() => {
    // Configura o observador de interseção
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Quando o elemento entra 15% dentro do ecrã, adiciona a classe
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Se quiseres que volte a desaparecer quando o utilizador faz scroll para cima,
            // basta descomentar a linha abaixo:
            // entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.15, // Ativa quando 15% do cartão estiver visível
        rootMargin: '0px 0px -50px 0px' // Margem de segurança na parte inferior do ecrã
      }
    );

    // Regista todos os cartões e o cabeçalho no observador
    const currentElements = elementsRef.current;
    currentElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Limpeza ao desmontar o componente
    return () => {
      currentElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Função auxiliar para guardar as referências dos elementos
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section className="v-strict-section" id="sobre">
      
      {/* CABEÇALHO */}
      <div className="v-strict-header" ref={addToRefs}>
        <span className="v-strict-tag">Ericeira, Portugal</span>
        <h2 className="v-strict-title">Sobre a Casa da Praia</h2>
        <p className="v-strict-intro">
          Uma experiência confortável e tranquila no coração da Ericeira, perfeita para desfrutar do mar e do charme da vila.
        </p>
      </div>

      {/* SECÇÕES VERTICAIS (ANIMAÇÃO AO FAZER SCROLL) */}
      <div className="v-strict-feed">
        
        {/* SECÇÃO 1: TERRAÇO */}
        <div className="v-strict-card" ref={addToRefs}>
          <div className="v-strict-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" 
              alt="Terraço com vista para o mar" 
            />
          </div>
          <div className="v-strict-content">
            <h3 className="v-strict-card-title">Terraço na Cobertura & Vista Mar</h3>
            <p className="v-strict-card-text">
              O maior destaque da Casa da Praia é o impressionante terraço panorâmico. É o local perfeito para apanhar sol, tomar um café pela manhã ou contemplar o pôr-do-sol sobre o oceano.
            </p>
            <ul className="v-strict-list">
              <li><strong>Vista 360º:</strong> Panorama único sobre a vila e o mar.</li>
              <li><strong>Segundo Terraço:</strong> Equipado com churrasqueira para refeições ao ar livre.</li>
              <li><strong>Acesso:</strong> Situado num 1º andar (sem elevador).</li>
            </ul>
          </div>
        </div>

        {/* SECÇÃO 2: ACOMODAÇÕES */}
        <div className="v-strict-card" ref={addToRefs}>
          <div className="v-strict-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80" 
              alt="Quarto acolhedor" 
            />
          </div>
          <div className="v-strict-content">
            <h3 className="v-strict-card-title">Espaço Aconchegante</h3>
            <p className="v-strict-card-text">
              Um ambiente versátil e acolhedor, ideal para famílias, casais ou pequenos grupos de amigos relaxarem após um dia de praia ou surf.
            </p>
            <ul className="v-strict-list">
              <li><strong>Quarto Principal:</strong> Cama de casal e excelente iluminação natural.</li>
              <li><strong>Segundo Quarto:</strong> Duas camas individuais confortáveis.</li>
              <li><strong>Sala de Estar:</strong> Sofá e televisão para relaxar.</li>
            </ul>
          </div>
        </div>

        {/* SECÇÃO 3: COZINHA */}
        <div className="v-strict-card" ref={addToRefs}>
          <div className="v-strict-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" 
              alt="Cozinha equipada" 
            />
          </div>
          <div className="v-strict-content">
            <h3 className="v-strict-card-title">Cozinha Equipada & Comodidades</h3>
            <p className="v-strict-card-text">
              Tudo o que precisa para preparar pequenos-almoços ou refeições completas com total autonomia.
            </p>
            <ul className="v-strict-list">
              <li><strong>Equipamentos:</strong> Forno, fogão, micro-ondas e frigorífico/congelador.</li>
              <li><strong>Máquinas:</strong> Lava-loiça e máquina de lavar roupa.</li>
              <li><strong>Pequeno-almoço:</strong> Máquina Dolce Gusto, chaleira e torradeira.</li>
              <li><strong>Extra:</strong> Casa de banho completa e Wi-Fi gratuito de alta velocidade.</li>
            </ul>
          </div>
        </div>

        {/* SECÇÃO 4: LOCALIZAÇÃO */}
        <div className="v-strict-card" ref={addToRefs}>
          <div className="v-strict-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
              alt="Praia na Ericeira" 
            />
          </div>
          <div className="v-strict-content">
            <h3 className="v-strict-card-title">Localização Imbatível</h3>
            <p className="v-strict-card-text">
              Situada no lado norte da vila, a casa permite aceder às praias e ao centro da Ericeira a pé em escassos minutos.
            </p>
            
            <div className="v-strict-beaches">
              <div className="v-strict-beach-item">
                <span className="v-strict-beach-name">Praia do Algodio</span>
                <span className="v-strict-beach-dist">100m (1 min a pé)</span>
              </div>
              <div className="v-strict-beach-item">
                <span className="v-strict-beach-name">Praia dos Pescadores</span>
                <span className="v-strict-beach-dist">250m (3 min a pé)</span>
              </div>
              <div className="v-strict-beach-item">
                <span className="v-strict-beach-name">Centro da Vila</span>
                <span className="v-strict-beach-dist">A uma curta caminhada</span>
              </div>
              <div className="v-strict-beach-item">
                <span className="v-strict-beach-name">Estacionamento</span>
                <span className="v-strict-beach-dist">Parques a 400m</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}