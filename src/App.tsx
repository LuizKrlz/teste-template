import { createServer } from "miragejs";
import Routes from "./routes";

createServer({
  routes() {
    this.urlPrefix = "http://localhost:3000";

    this.post("/login", (schema, req) => {
      console.log(req);
      return {
        user: {
          email: "user@mail.com",
          name: "Luiz",
        },
        auth: {
          type: "bearer",
          token: "tokenzinho",
        },
      };
    });
  },
});

export const App = () => {
  return <Routes />;
};
