import { useAuthAtomValue } from "../../store/auth";

export const Home = () => {
  const auth = useAuthAtomValue();

  return <h1>Olá {auth?.user.name}</h1>;
};
