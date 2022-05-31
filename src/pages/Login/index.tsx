import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import * as requests from "../../integrations/session/requests";

import { setAccessToken } from "../../helpers/token";
import { useAuthAtom } from "../../store/auth";

type TFormData = {
  email: string;
  password: string;
};

const schemaValidation = Yup.object({
  email: Yup.string().email("E-mail inválido").required("Campo obrigatorio"),
  password: Yup.string().required("Campo obrigatorio"),
});

export const Login = () => {
  const [_, setAuthValue] = useAuthAtom();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<TFormData>({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const { auth, user } = await requests.login(values);

      // depois do login seta o token autenticado no local storage pro axios usar depois
      setAccessToken(auth.token);
      setAuthValue({
        user,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <h1>Login</h1>

      <form noValidate onSubmit={onSubmit}>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Email" id="email" {...field} />
              {error && <span style={{ color: "red" }}>{error.message}</span>}
            </div>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="Senha" id="password" {...field} />
              {error && <span style={{ color: "red" }}>{error.message}</span>}
            </div>
          )}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
