import nc from "next-connect";
import fs from "fs";

const route = nc({
  onError(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send("Internal Error occured");
  },
}).post((req, res) => {
  fs.readFile(
    `./fakeData/${req.query.datafordoc}.json`,
    "utf8",
    (err, data) => {
      if (err) {
        res.json({ Error: err });
      } else {
        res.send(data);
      }
    }
  );
});

export default route;
