// Middlewares are functions that are executed before and after each request.
// Middlewares -> Chain of responsibility
const passOne = (context, next) => {
  context.valueOne = "middleOne";
  next();
};

const passTwo = (context, next) => {
  context.valueTwo = "middleTwo";
  next();
};

const passThree = (context) => {
  context.valueThree = "middleThree";
};

const executedMiddlewares = (context, ...middlewares) => {
  const executePass = (index) => {
    middlewares &&
      index < middlewares.length &&
      middlewares[index](context, () => {
        executePass(index + 1);
      });
  };
  executePass(0);
};

const context = {};
executedMiddlewares(context, passOne, passTwo, passThree);

console.log(context);
