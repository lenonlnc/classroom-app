export default function PasswordRecovered() {
    return (
        <div className="h-screen flex items-center flex-col justify-center gap-4 ">
            <p className="text-5xl font-semibold text-indigo-950">Formulário enviado com sucesso!</p>
            <img className="w-60 h-60" src="/done.jpeg"></img>
            <p>Foram enviadas instruções para a recuperação de email para o seu email.</p>
        </div>
    )
}
