'use client'
import { useForm } from 'react-hook-form'

import { useRouter } from 'next/navigation'
export default function PasswordRecover() {
    const { register, handleSubmit } = useForm()

    const router = useRouter()

    function recoveryDone(data) {
        router.push('/password-recovered')
    }

    return (
        <div className="h-screen flex items-center flex-col justify-center gap-4 ">
            <div className="font-semibold text-3xl">
                <h1>Recuperação de senha</h1>
            </div>
            <div className="flex flex-col items-center">
                <p>
                    Para que possamos dar continuidade ao processo de <br /> recuperação de senha, por favor digite o email registrado
                </p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div>
                    <input
                        {...register('email')}
                        type="text"
                        name="email"
                        placeholder="email@email.com"
                        className="p-2 w-96 bg-violet-100 border shadow-sm rounded border-slate-300 focus:outline-none focus:border-violet-500 focus:ring-violet-500"
                    ></input>
                </div>
            </div>
            <div onClick={handleSubmit(recoveryDone)} className="cursor-pointer bg-violet-500 text-white p-4 rounded w-96 flex items-center justify-center">
                Enviar confirmação
            </div>
        </div>
    )
}
