import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";

export default function Card() {
    return (
        <div className="max-h-80 w-11/12 bg-white flex items-center justify-center xl:max-h-96">
            <div className="m-2 w-full flex flex-col gap-7 h-full xl:m-3">
                <div className="flex flex-row justify-between items-center">
                    <span className="text-xs text-gray-500 xl:text-sm">02 de jul de 2023</span>
                    <div className="flex flex-row items-center justify-center gap-1">
                        <span className="text-gray-700 text-sm xl:text-base">0</span>
                        <AiOutlineHeart className="text-violet-700 xl:text-lg" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-slate-900 leading-5 text-lg text-left xl:text-xl">Agora é oficial: o Windows 11 está vindo</h3>
                    <p className="text-sm leading-6 text-gray-500 xl:text-base xl:font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vestibulum auctor est. Nam vitae finibus ante.
                        Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
                    </p>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-5 h-5 bg-slate-500 rounded-full xl:w-6 xl:h-6"></div>
                        <p className="text-xs font-light xl:text-sm">Nome sobrenome</p>
                    </div>
                    <div>
                        <AiOutlineDelete className="text-red-500 xl:text-lg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}