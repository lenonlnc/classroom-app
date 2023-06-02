export default function () {
  return (
    <div className="flex flex-col">
      {/* navbar */}
      <div className="bg-violet-500 p-6 w-full m-0 flex items-center gap-6 px-44 justify-end">
        <i className="fa-solid fa-magnifying-glass text-white"></i>
        <input
          className=" rounded-full p-3 bg-violet-100 border shadow-sm  focus:outline-none focus:border-violet-500 focus:ring-violet-500"
          type="text"
          name="search"
          placeholder="pesquisar por curso"
        />
        <div className="flex items-center gap-4">
          <div className="bg-violet-900 rounded-full p-6"></div>
        </div>
      </div>

      {/* conteúdo */}
      <div className="p-20 flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <p className="font-bold text-3xl">Cursos</p>
          <div className="hover:bg-violet-300 transition ease-out duration-150s cursor-pointer p-4 w-max h-max rounded flex items-center gap-2">
            <p className="text-black text-sm">Filtrar por</p>
            <i className="fa-solid fa-chevron-down text-black"></i>
          </div>
        </div>

        <div className=" w-max grid grid-cols-4 gap-10">
          <div className="flex flex-col gap-4 shadow-md p-6">
            {/* image */}
            <div className="bg-zinc-300 w-96 h-48 rounded"></div>
            {/* description */}
            <div className="flex flex-col">
              <p className="font-normal text-lg">Nome do curso</p>
              <div className="flex items-center gap-1">
                <p>Nota:</p>
              </div>
              <p className="font-normal text-base text-zinc-400">
                Descrição do curso
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 shadow-md p-6">
            {/* image */}
            <div className="bg-zinc-300 w-96 h-48 rounded"></div>
            {/* description */}
            <div className="flex flex-col">
              <p className="font-normal text-lg">Nome do curso</p>
              <div className="flex items-center gap-1">
                <p>Nota:</p>
              </div>
              <p className="font-normal text-base text-zinc-400">
                Descrição do curso
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 shadow-md p-6">
            {/* image */}
            <div className="bg-zinc-300 w-96 h-48 rounded"></div>
            {/* description */}
            <div className="flex flex-col">
              <p className="font-normal text-lg">Nome do curso</p>
              <div className="flex items-center gap-1">
                <p>Nota:</p>
              </div>
              <p className="font-normal text-base text-zinc-400">
                Descrição do curso
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 shadow-md p-6">
            {/* image */}
            <div className="bg-zinc-300 w-96 h-48 rounded"></div>
            {/* description */}
            <div className="flex flex-col">
              <p className="font-normal text-lg">Nome do curso</p>
              <div className="flex items-center gap-1">
                <p>Nota:</p>
              </div>
              <p className="font-normal text-base text-zinc-400">
                Descrição do curso
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 shadow-md p-6">
            {/* image */}
            <div className="bg-zinc-300 w-96 h-48 rounded"></div>
            {/* description */}
            <div className="flex flex-col">
              <p className="font-normal text-lg">Nome do curso</p>
              <div className="flex items-center gap-1">
                <p>Nota:</p>
              </div>
              <p className="font-normal text-base text-zinc-400">
                Descrição do curso
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
