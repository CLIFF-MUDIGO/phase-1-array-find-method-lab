
  function superbowlWin(record) {
    const winningGame = record.find(game => game.team === "Denver Broncos" && game.result === "W");
    return winningGame ? winningGame.year.toString() : undefined;
  }