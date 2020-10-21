import { SayHelloResponse, SayHelloQueryArgs } from "src/types/graph";

const resolvers = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
      console.log(args);
      return {
        error: false,
        text: `Hello ${args.name}`,
      };
    },
  },
};

export default resolvers;
