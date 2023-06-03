'use client'

import { v4 as uuid } from 'uuid'
export async function logInRequest(email, password) {
    return {
        token: uuid(),
        user: {
            name: 'Lenon Lencina',
            email: 'lenonlara1@gmail.com',
            avatar_url: 'https://github.com/lenon_lnc.png'
        }
    }
}

export async function recoverUserData() {
    return {
        user: {
            name: 'Lenon Lencina',
            email: 'lenonlara1@gmail.com'
        }
    }
}
