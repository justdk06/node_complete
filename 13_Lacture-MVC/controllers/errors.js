exports.pageNotFOund = (req, res, next) =>{
  res
    .status(404)
    .render("404", { pageTitle: "Page NOt Found", currentPage: "404"});
};