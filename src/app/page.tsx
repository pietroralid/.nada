"use client";

import { useState } from "react";

const petals = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: `${(index % 9) * 0.55}s`,
  duration: `${7 + (index % 6)}s`,
  size: `${10 + (index % 5) * 4}px`,
}));

const reasons = [
  "o teu sorriso muda qualquer dia",
  "tudo fica mais bonito quando penso em voce",
  "eu quero viver mais momentos simples ao teu lado",
];

export default function Home() {
  const [answered, setAnswered] = useState(false);

  return (
    <main className="proposal">
      <div className="petals" aria-hidden="true">
        {petals.map((petal) => (
          <span
            key={petal.id}
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              width: petal.size,
              height: petal.size,
            }}
          />
        ))}
      </div>

      <section className="hero" aria-label="Pedido de namoro para Lauren">
        <div className="bouquet bouquet-left" aria-hidden="true">
          <Flower color="#e94b77" />
          <Flower color="#f6a6b9" />
          <Flower color="#f7d267" />
        </div>

        <div className="letter">
          <p className="kicker">Lauren, eu preparei isso pra voce</p>
          <h1>Quer namorar comigo?</h1>
          <p className="message">
            Eu nao quero que seja so uma pergunta bonita numa tela. Quero que seja
            o comeco de uma historia nossa, com carinho, risadas, cuidado e
            muitos momentos para lembrar.
          </p>

          <div className="reasons" aria-label="Motivos">
            {reasons.map((reason) => (
              <span key={reason}>{reason}</span>
            ))}
          </div>

          <div className="actions">
            <button className="yes" type="button" onClick={() => setAnswered(true)}>
              Sim
            </button>
            <button className="yes secondary" type="button" onClick={() => setAnswered(true)}>
              Claro que sim
            </button>
          </div>

          {answered && (
            <div className="answer" role="status">
              <span>♥</span>
              <p>Agora oficialmente eu tenho o melhor motivo para sorrir.</p>
            </div>
          )}
        </div>

        <div className="bouquet bouquet-right" aria-hidden="true">
          <Flower color="#d93f68" />
          <Flower color="#ffffff" />
          <Flower color="#f3b2c1" />
        </div>
      </section>
    </main>
  );
}

function Flower({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 150" role="img" aria-label="Flor decorativa">
      <path d="M60 72 C50 100 46 124 42 148" className="stem" />
      <path d="M57 105 C36 94 23 84 12 66 C36 66 51 77 61 94" className="leaf" />
      <path d="M63 102 C84 86 98 77 112 76 C99 97 82 107 62 111" className="leaf" />
      <g className="bloom" style={{ "--flower": color } as React.CSSProperties}>
        <ellipse cx="60" cy="44" rx="17" ry="30" transform="rotate(0 60 60)" />
        <ellipse cx="60" cy="44" rx="17" ry="30" transform="rotate(60 60 60)" />
        <ellipse cx="60" cy="44" rx="17" ry="30" transform="rotate(120 60 60)" />
        <circle cx="60" cy="60" r="15" className="center" />
      </g>
    </svg>
  );
}
