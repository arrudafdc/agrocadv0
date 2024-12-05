import logoSeagri from "../../assets/logo-seagri.png";
import logoAgrocad from "../../assets/logo-agrocad.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Login() {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <div className="order-2 md:order-1 h-1/4 md:h-auto md:w-1/2 bg-green-900 flex items-center justify-center">
        <div>
          <img className="w-52 md:w-72" src={logoSeagri} alt="Logo da Seagri" />
        </div>
      </div>

      <div className="order-1 md:order-2 h-3/4 md:h-auto p-4 md:p-0 md:w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="flex justify-center items-center mb-6">
            <img className="w-20" src={logoAgrocad} alt="Logo da Agrocad" />
          </div>

          <h1 className="text-center md:text-start text-3xl font-bold tracking-tighter">
            Bem-vindo ao AgroCad
          </h1>
          <p className="text-center md:text-start text-gray-500 mb-6">
            Preencha os dados corretamente para fazer login
          </p>

          <form>
            <div className="mb-2">
              <Label>CPF</Label>
              <Input className="mt-1" type="text" />
            </div>
            <div className="mb-4">
              <Label>Senha</Label>
              <Input className="mt-1" type="password" />
            </div>
            <Button className="w-full mb-4" type="submit">
              Entrar
            </Button>
            <a className="block underline text-sm text-center" href="#">
              Esqueceu a senha?
            </a>
          </form>
        </div>
      </div>
    </main>
  );
}
