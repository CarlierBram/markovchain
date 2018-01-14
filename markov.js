var Markov = require('markovchain-generate');
var chain = new Markov()
var text = "For centuries, the order of the Knights Templar have searched for the mythical Apple of Eden. They believe it contains not only the seeds of man's first disobedience, but the key to the free will itself. If they find the relic and decode its secrets, they will have the power to control all freedom of thought. Only the brotherhood called the Assassins stands in their way... Where other men blindly follow the truth, remember, nothing is true. Where other men are limited by morality or law, remember, everything is permitted. We work in the darkness to serve the light. We are Assassins."
chain.generateChain(text);
var generated_string = chain.generateString();
console.log(generated_string);