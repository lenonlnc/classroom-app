'use client'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/context'
import { useRouter } from 'next/navigation'
export default function Home() {
    const { register, handleSubmit } = useForm()

    const router = useRouter()

    const { logIn } = useContext(AuthContext)
    async function handleSignIn(data) {
        try {
            await logIn(data)
        } catch (e) {
            console.log(`Authenthication error. ERR:${e}`)
        }
    }

    function redefinePassword() {
        router.push('/password-recover')
    }

    return (
        <div className="h-screen flex items-center flex-col justify-center gap-4 ">
            <div className="font-semibold text-3xl">
                <h1>Iniciar sessão</h1>
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

                <div>
                    <input
                        {...register('password')}
                        type="password"
                        placeholder="password"
                        className="p-2 bg-violet-100 w-96 border shadow-sm rounded border-slate-300 focus:outline-none focus:border-violet-500 focus:ring-violet-500"
                    ></input>
                </div>
            </div>
            <div className="cursor-pointer bg-violet-500 text-white p-4 rounded w-96 flex items-center justify-center" onClick={handleSubmit(handleSignIn)}>
                Login
            </div>
            <a onClick={redefinePassword} className="text-violet-400 cursor-pointer hover:text-violet-600">
                Esqueceu sua senha?
            </a>
        </div>
    )
}
