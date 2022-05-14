import app from './app';

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('é o trybesmooth');
});

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
