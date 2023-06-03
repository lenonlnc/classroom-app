import { useEffect, useState } from 'react'

export default function Navbar(user) {
    // useEffect(() => {
    //     if (loggedIn) {
    //         localStorage.clear()
    //     }
    // })

    // const [loggedIn, logoutUser] = useState(true)

    // function logout() {
    //     logoutUser(false)
    // }
    return (
        <div className="bg-violet-500 p-6 w-full m-0 flex items-center gap-6 px-44 justify-end">
            <div className="flex items-center gap-4">
                <img className="rounded-full h-10 w-10" src={user.avatar_url} alt="" />
                <div className="cursor-pointer">
                    <p className="text-white">Sair</p>
                </div>
                {/* <div className="bg-violet-900 py-1 cursor-pointer rounded-full w-10 h-10 flex-items-center flex justify-center">
                    <p className="text-white font-bold text-xl">L</p>
                </div> */}
            </div>
        </div>
    )
}
