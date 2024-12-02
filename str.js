const arr = [
  {
    id: "65e6005a7c4b60862c4a1148",
    playerName: "avesh test",
    role: "organizer",
    position: "ST",
    email: "aveshraza010+t1@gmail.com",
    gameId: "664e26f0986d13278437b3da",
    team: "teamA",
    playerIndex: 0,
  },
  {
    id: "664e2b4c5a2c7b7a389e7807",
    playerName: "ww",
    role: "member",
    position: "LW",
    gameId: "664e26f0986d13278437b3da",
    team: "teamA",
    playerIndex: 1,
    memberIndex: 1,
  },
  {
    team: "teamA",
    playerIndex: 2,
    memberIndex: 2,
  },
  {
    team: "teamA",
    playerIndex: 3,
    memberIndex: 3,
  },
  {
    team: "teamA",
    playerIndex: 4,
    memberIndex: 4,
  },
  {
    team: "teamA",
    playerIndex: 5,
    memberIndex: 5,
  },
  {
    team: "teamA",
    playerIndex: 6,
    memberIndex: 6,
  },
  {
    team: "teamA",
    playerIndex: 7,
    memberIndex: 7,
  },
  {
    team: "teamA",
    playerIndex: 8,
    memberIndex: 8,
  },
  {
    team: "teamA",
    playerIndex: 9,
    memberIndex: 9,
  },
  {
    team: "teamA",
    playerIndex: 10,
    memberIndex: 10,
  },
  {
    team: "teamB",
    playerIndex: 0,
    memberIndex: 11,
  },
  {
    team: "teamB",
    playerIndex: 1,
    memberIndex: 12,
  },
  {
    team: "teamB",
    playerIndex: 2,
    memberIndex: 13,
  },
  {
    team: "teamB",
    playerIndex: 3,
    memberIndex: 14,
  },
  {
    team: "teamB",
    playerIndex: 4,
    memberIndex: 15,
  },
  {
    team: "teamB",
    playerIndex: 5,
    memberIndex: 16,
  },
  {
    team: "teamB",
    playerIndex: 6,
    memberIndex: 17,
  },
  {
    team: "teamB",
    playerIndex: 7,
    memberIndex: 18,
  },
  {
    team: "teamB",
    playerIndex: 8,
    memberIndex: 19,
  },
  {
    team: "teamB",
    playerIndex: 9,
    memberIndex: 20,
  },
  {
    team: "teamB",
    playerIndex: 10,
    memberIndex: 21,
  },
];

const finalFunc = () => {
  return arr.map((p) =>
    p?.playerName ? `${p.playerName} - ${p.position || "-"}` : "-"
  );
};

console.log(finalFunc());
