import { AiOutlineHeart } from "react-icons/ai";

export default function Card() {
    return (
        <div className="max-h-56 w-11/12 bg-white flex items-center justify-center">
            <div className="m-2 w-full flex flex-col gap-6 h-full">
                <div className="flex flex-row justify-between items-center">
                    <span className="text-xs text-gray-500">02 de jul de 2023</span>
                    <AiOutlineHeart className="text-violet-700" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-slate-900 leading-5 text-lg text-left">Agora é oficial: o Windows 11 está vindo</h3>
                    <p className="text-sm leading-6 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vestibulum auctor est. Nam vitae finibus ante.
                        Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
                    </p>
                </div>
            </div>
        </div>
    )
}