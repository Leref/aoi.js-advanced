module.exports = {
    name: "queue",
    code: `
     $title[1;Queue]
     $author[1;Requested By $userTag;$authorAvatar]
     $description[1;$queue[$if[$message==;1;$message]]]
     $footer[1;Number of songs: $queueLength]
     $color[1;RANDOM]
     $addTimestamp[1]
      `,
  };