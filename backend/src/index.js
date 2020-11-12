const express = require("express");
const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server-express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const lusca = require("lusca");
const dotenv = require("dotenv");
const chalk = require("chalk");
const errorHandler = require("errorhandler");
const compression = require("compression");
const path = require("path");
const multer = require("multer");
const expressStatusMonitor = require("express-status-monitor");

const app = express();
dotenv.config();
require("./db/db");

const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const models = require("./models");
// const auth = require('./middleware/auth');
const { getAuthUser } = require("./utils");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const authUser = await getAuthUser(req);

    return { models, authUser };
  },
});

server.applyMiddleware({ app, cors: true });

const apiRoutes = require("./routes/api-routes");
const userRoutes = require("./routes/user");

const port = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(lusca.xssProtection(true));
app.use(expressStatusMonitor());
app.use(compression());

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
  app.use(logger("dev"));

  // logger.token('graphql-query', (req) => {
  //     const {query, variables, operationName} = req.body;
  //     return `GRAPHQL: \nOperation Name: ${operationName} \nQuery: ${query} \nVariables: ${JSON.stringify(variables)}`;
  // });

  // app.use(logger(':graphql-query'));
} else {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Server Error");
  });

  // setup the logger
  app.use(logger("combined"));
}

app.get("/", (req, res) =>
  res.send(
    '<h1 style="width: 100%; text-align: center; margin-top: 40vh; color: #f34eff; font-size: 62px;">The Wine Club App</h1>'
  )
);
app.use("/api", apiRoutes);
app.use("/api", userRoutes);

app.listen(port, function () {
  console.log(
    `🚀 Running Wineclub on port ${port} with GraphQL server runs on http://localhost:${port}${
      server.graphqlPath
    } ${chalk.green("✓")}`
  );
});
