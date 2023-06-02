export default function Card() {
    return (
        <div className="flex flex-col gap-4 shadow-md p-6">
            {/* image */}
            <div className="bg-zinc-300 w-96 h-48 rounded"></div>
            {/* description */}
            <div className="flex flex-col">
                <p className="font-normal text-lg">Nome do curso</p>
                <div className="flex items-center gap-1">
                    <p>Nota:</p>
                </div>
                <p className="font-normal text-base text-zinc-400">Descrição do curso</p>
            </div>
        </div>
    )
}
