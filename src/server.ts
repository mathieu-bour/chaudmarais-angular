import * as express from 'express';
import {redirectToHTTPS} from 'express-http-to-https';

const port = process.env.PORT || 4000;

const app = express();
app.enable('trust proxy');

// Enforce HTTPS, if not running on localhost:PORT
app.get('*', redirectToHTTPS([/localhost:(\d{4})/], [], 301));

// Enforce www to non-www redirection (source: https://stackoverflow.com/a/23816083)
app.get('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.headers.host.slice(0, 4) === 'www.') {
    const newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
  }

  next();
});

app.get('*.*', express.static(__dirname, {maxAge: '1y'}));

app.all('*', (req, res) => {
  res.status(200).sendFile(`/`, {root: __dirname});
});

app.listen(port, () => {
  console.log(`Express is listing on localhost:${port}`);
});
