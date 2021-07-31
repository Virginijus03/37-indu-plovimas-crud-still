const Plates = require('./Plates');

const restoran = new Plates('Jonas');

restoran.intro();
// Hi, this restoran has no plates! Please, buy some.

restoran.buyPlates(50);
// Restoran purchased 50 plates.

restoran.intro();
// Hi, this restoran has 50 plates!

restoran.usePlates(20);
// Restoran has made some dishes for 20 plates.

restoran.cleanPlatesCount();
// Restoran has 30 clean plates.

restoran.usePlates(20);
// Restoran has made some dishes for 20 plates.

restoran.cleanPlatesCount();
// Restoran has 10 clean plates.

restoran.usePlates(20);
// Restoran has 10 plates only, it's not enough. No action is taken.

restoran.cleanUp(60);
// Restoran does not have so many dirty plates.

restoran.buyPlates(10);
// Restoran purchased 10 plates.

restoran.usePlates(20);
// Restoran has made some dishes for 20 plates.

restoran.cleanPlatesCount();
// Restoran is left with no clean plates.

restoran.cleanUp(60);
// All plates in the Restoran is clean!