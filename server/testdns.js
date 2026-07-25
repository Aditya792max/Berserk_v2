const dns = require("node:dns").promises;

(async () => {
  try {
    const records = await dns.resolveSrv(
      "_mongodb._tcp.cluster0.kmhshkh.mongodb.net"
    );
    console.log(records);
  } catch (err) {
    console.error(err);
  }
})();