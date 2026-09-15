const http = require('http');

const PORT = process.env.PORT || 3000;

const page = `
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ma page JS</title>
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, #0f172a, #1e293b, #334155);
        font-family: Arial, Helvetica, sans-serif;
        color: #e2e8f0;
      }
      .card {
        width: min(90vw, 420px);
        background: rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(148, 163, 184, 0.3);
        border-radius: 18px;
        padding: 30px 24px;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
      }
      h1 {
        margin-top: 0;
        font-size: 2rem;
      }
      p {
        font-size: 1.05rem;
        margin: 20px 0;
      }
      button {
        background: #38bdf8;
        border: none;
        border-radius: 10px;
        color: #082f49;
        padding: 12px 22px;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.2s ease;
      }
      button:hover {
        transform: translateY(-1px);
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Bienvenue</h1>
      <p id="message">Clique sur le bouton pour changer le message.</p>
      <button id="btn">Changer le texte</button>
    </div>

    <script>
      const button = document.getElementById('btn');
      const message = document.getElementById('message');
      const messages = [
        'Bonjour !',
        'La page JavaScript fonctionne.',
        'Tu peux maintenant personnaliser cette page.',
        'Bravo, tout est prêt !'
      ];

      let index = 0;

      button.addEventListener('click', () => {
        index = (index + 1) % messages.length;
        message.textContent = messages[index];
      });
    </script>
  </body>
</html>
`;

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(page);
  })
  .listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
  });
