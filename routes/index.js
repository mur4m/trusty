var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/", function (req, res, next) {
  res.send("bonjour");
});

/* GET listing. */
router.get("/company/:name", async function (req, res, next) {
  const companies = await getCompanies(req.params.name);

  const openJobs = companies.data.map((job) => {
    return {
      lever_id: job.id,
      name: job.text,
      department: job.categories.department,
      jobUrl: job.hostedUrl,
      contract: job.categories.commitment,
      team: job.categories.team,
      location: job.categories.location,
      publishedAt: job.createdAt,
    };
  });
  const jobDetails = {
    companyName: req.params.name,
    endpointLever: `https://api.lever.co/v0/postings/${req.params.name}?mode=json`,
    nbrOpenJob: openJobs.length,
    OpenJob: openJobs,
  };
  res.json({ jobDetails });
});

async function getCompanies(name) {
  const companies = await axios.get(
    `https://api.lever.co/v0/postings/${name}?mode=json`
  );
  // console.log("companies", companies);

  return companies;
}

module.exports = router;
