import * as express from 'express';

const port = process.env.PORT || 4000;
const app = express();


app.get('*.*', express.static(__dirname, {maxAge: '1y'}));

app.all('*', (req, res) => {
  res.status(200).sendFile(`/`, {root: __dirname});
});

app.listen(port, () => {
  console.log(`Express is listing on localhost:${port}`);
});
