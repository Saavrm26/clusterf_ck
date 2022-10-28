const random = require('random');
const seedrandom = require('seedrandom')
random.use(seedrandom('"F_ck War" ~~ Sun Tzu'))

const getRandom = (n,p) =>{
	return random.binomial(n, p);
}

const getGraph = (n,m,str) => {
  	//implement the graph
	console.log(getRandom(5,0.7));
};

module.exports = { getGraph };
