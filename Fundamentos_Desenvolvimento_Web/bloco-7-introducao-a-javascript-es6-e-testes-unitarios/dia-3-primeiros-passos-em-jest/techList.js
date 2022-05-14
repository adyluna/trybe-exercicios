function techList(tech, name) {
    if (tech.length === 0) {
      return "Vazio!"
    }
    
    techArr = []
    for (let i =0; i < tech.length; i++) {
      sortedTech = tech.sort()
      let techObj = {
        tech: sortedTech[i],
        name: name
      }
      techArr.push(techObj);
    }
    return techArr
};

module.exports = techList;