module.exports = {
    name: "play",
    $if: "v4",
    code: `
      $let[msg;$playTrack[youtube;$message]]
  
      $if[$hasPlayer==false]
          $joinVc
      $endif
  
      $onlyif[($voiceId[$clientId]!=)&&($voiceId[$clientId]==$voiceId);You are not in the same voice channel]
      $onlyif[$voiceId!=;Join a voice channel before using play command]
      `,
  };