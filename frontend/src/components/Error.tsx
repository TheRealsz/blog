import error from "@/assets/Cosmos.png";

export const Error = () => {
    return (
        <div className="w-11/12 flex flex-col gap-5 justify-center items-center">
            <h2 className="text-2xl font-bold md:text-3xl xl:text-4xl">Ops!</h2>
            <h3 className="text-lg font-medium text-center md:text-xl xl:text-2xl">Aparentemente nenhum post foi encontrado. Que tal criar um?</h3>
            <img src={error} alt="" className="w-10/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12" />
        </div>
    )
}