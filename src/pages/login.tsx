import Input from "@/components/template/Input";
import { KeyIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as yup from 'yup';

export default function Login() {

  const validationSchema = yup.object().shape({
    email: yup.string()
      .required("Campo é obrigatorio")
      .email("inválido"),
    password: yup.string()
      .required("Campo é obrigatorio")
      .min(3, "Mínimo 3 caracteres")
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values)  => {
      console.log(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-auto md:w-1/3 p-5 rounded-xl bg-gray-50">
        <h1 className="p-1 text-xl text-center">Paytrack</h1>
        <form onSubmit={handleSubmit} noValidate>
          <Input label="E-mail"
            name="email"
            type="email"
            value={values.email}
            placeholder="usuario@email.com"
            onChange={handleChange}
            error={touched.email ? errors.email : null}
            icon={
              <UserCircleIcon className={`pointer-events-none 
                w-4 h-4 
                absolute 
                top-1/2 transform -translate-y-1/2 left-3`}
              />
            }/>
          <Input label="Senha"
            name="password"
            type="password"
            value={values.password}
            placeholder="****"
            onChange={handleChange}
            error={touched.password ? errors.password : null} 
            icon={
              <KeyIcon className={`pointer-events-none 
                w-4 h-4 
                absolute 
                top-1/2 transform -translate-y-1/2 left-3 `}
              />
            }/>
          <button type="submit" 
            className={`p-2 my-4 
              bg-gradient-to-r from-blue-400 to-purple-500
              text-white rounded-full w-full`}> Entrar </button>
        </form>
        <div className="flex justify-center items-center gap-2 my-4">
          <button onClick={() => console.log('facebook')}>
            <Image alt="Facebook" src="/images/icons8-facebook-48.png" width={40} height={40} />
          </button>
          <button onClick={() => console.log('google')}>
            <Image alt="Google" src="/images/icons8-google-48.png" width={40} height={40} />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <p> Ainda não possui cadastro? <Link className="text-blue-500" href="/cadastro">Clique aqui</Link> </p>
        </div>
      </div>
    </div>
  )
}