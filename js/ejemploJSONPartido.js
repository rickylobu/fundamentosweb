// ejemploJSONPartido.js
// Esta función procesa el JSON del partido y muestra los resultados en una lista dentro del div "resultadoPartido"

function ejecutarJSONPartido() {
    // JSON de ejemplo del partido de fútbol
    const partidoJSON = `{
      "matchId": 12345,
      "date": "2025-03-07T18:30:00Z",
      "stadium": "Estadio Nacional",
      "referee": "Carlos Pérez",
      "teams": {
        "home": {
          "name": "Los Leones",
          "coach": "Miguel Hernández",
          "players": [
            { "number": 1, "name": "Juan Martínez", "position": "Portero" },
            { "number": 4, "name": "Pedro Gómez", "position": "Defensa" },
            { "number": 8, "name": "Luis Ramírez", "position": "Centrocampista" },
            { "number": 10, "name": "Andrés López", "position": "Delantero" }
          ]
        },
        "away": {
          "name": "Los Tigres",
          "coach": "Ricardo Silva",
          "players": [
            { "number": 1, "name": "Carlos Ruiz", "position": "Portero" },
            { "number": 5, "name": "Diego Fernández", "position": "Defensa" },
            { "number": 7, "name": "José Castro", "position": "Centrocampista" },
            { "number": 9, "name": "Fernando Díaz", "position": "Delantero" }
          ]
        }
      },
      "score": {
        "home": 2,
        "away": 1
      },
      "events": [
        {
          "minute": 15,
          "type": "goal",
          "team": "home",
          "player": "Andrés López",
          "description": "Gol desde fuera del área."
        },
        {
          "minute": 35,
          "type": "yellow_card",
          "team": "away",
          "player": "Diego Fernández",
          "description": "Falta dura."
        },
        {
          "minute": 60,
          "type": "goal",
          "team": "home",
          "player": "Luis Ramírez",
          "description": "Cabeceo perfecto."
        },
        {
          "minute": 78,
          "type": "goal",
          "team": "away",
          "player": "Fernando Díaz",
          "description": "Remate cruzado."
        }
      ]
    }`;
  
    // Parsear el JSON
    const partido = JSON.parse(partidoJSON);
  
    // Determinar portero de cada equipo (se asume el primer jugador con posición "Portero")
    const porteroHome = partido.teams.home.players.find(player => player.position === "Portero").name;
    const porteroAway = partido.teams.away.players.find(player => player.position === "Portero").name;
  
    // Los goles recibidos por cada portero son los goles anotados por el equipo contrario
    const golesPorteroHome = partido.score.away; // Goles a favor del equipo visitante
    const golesPorteroAway = partido.score.home; // Goles a favor del equipo local
  
    // Determinar el ganador en base al marcador
    let ganador = "";
    let max;
    let min;
    if (partido.score.home > partido.score.away) {
      ganador = partido.teams.home.name;
      max = partido.score.home;
      min = partido.score.away;
    } else if (partido.score.home < partido.score.away) {
      ganador = partido.teams.away.name;
      max = partido.score.away;
      min = partido.score.home;
    } else {
      ganador = "Empate";
    }
  
    // Construir la lista HTML con los resultados
    const listaHTML = `
      <ul>
        <li>Al <strong>porteroA: ${porteroHome}</strong> (del equipo local, ${partido.teams.home.name}) le metieron ${golesPorteroHome} gol${golesPorteroHome !== 1 ? "es" : ""} a favor del equipo visitante: ${partido.teams.away.name}.</li>
        <li>Al <strong>porteroB: ${porteroAway}</strong> (del equipo visitante, ${partido.teams.away.name}) le metieron ${golesPorteroAway} gol${golesPorteroAway !== 1 ? "es" : ""} a favor del equipo local: ${partido.teams.home.name}.</li>
        <li>El ganador es: ${ganador}.</li>
        <li>También podrías generar la lógica para mostrar Marcador Final: ${max}, ${min} Favor ${ganador}</li>
      </ul> 
    `;
  
    // Mostrar el resultado en el div con id "resultadoPartido"
    document.getElementById('resultadoPartido').innerHTML = listaHTML;
  }
  