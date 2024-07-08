const game = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        // Other players...
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        // Other players...
      }
    }
  };
  function numPointsScored(playerName) {
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return "Player not found";
  }
  function shoeSize(playerName) {
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return "Player not found";
  }
  function teamColors(teamName) {
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return "Team not found";
  }
  function teamNames() {
    return [game.home.teamName, game.away.teamName];
  }
  function playerNumbers(teamName) {
    for (let team in game) {
      if (game[team].teamName === teamName) {
        let playerNumbers = [];
        for (let player in game[team].players) {
          playerNumbers.push(game[team].players[player].number);
        }
        return playerNumbers;
      }
    }
    return "Team not found";
  }
  function playerStats(playerName) {
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return "Player not found";
  }
  function bigShoeRebounds() {
    let playerWithLargestShoe = null;
    let largestShoeSize = -Infinity;
  
    // Find player with largest shoe size
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].shoe > largestShoeSize) {
          largestShoeSize = game[team].players[player].shoe;
          playerWithLargestShoe = game[team].players[player];
        }
      }
    }
  
    // Return rebounds of player with largest shoe size
    return playerWithLargestShoe.rebounds;
  }
        