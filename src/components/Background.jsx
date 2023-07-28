function getRandomBgType() {
    const types = [
      { 'type': 'circle', 'num': 4 },
      { 'type': 'thick', 'num': 8 },
    ]
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex];
  }



export { getRandomBgType };