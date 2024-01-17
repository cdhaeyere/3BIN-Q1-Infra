const express = require('express');
const router = express.Router();



const Exoplanet = require('../models/Exoplanet.js');

/* GET exoplanets index. */
router.get('/', async (req, res, next) => {
  const exoplanetsTable = await Exoplanet.list();
  console.log("route : " + JSON.stringify(exoplanetsTable));
  res.render('exoplanets/index', { exoplanetsTable });
});

/* POST add exoplanet. */
router.post('/add', (req, res, next) => {
  console.log("POST ADD EXOPLANET");
  Exoplanet.save({
    unique_name: req.body.uniqueNameExoplanet,
    hclass: req.body.hClassExoplanet,
    discovery_year: req.body.discoveryYearExoplanet
  });
  res.redirect('/exoplanets');
});



module.exports = router;