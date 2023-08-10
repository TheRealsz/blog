import { AiOutlineHeart } from "react-icons/ai";

export default function Card() {
    return (
        <div className="max-h-72 w-11/12 bg-white flex items-center justify-center">
            <div className="p-2 w-full flex flex-col gap-7">
                <div className="flex flex-row justify-between items-center">
                    <span className="text-xs text-gray-500">02 de jul de 2023</span>
                    <AiOutlineHeart className="text-violet-700" />
                </div>
                <div className="flex flex-col gap-1">
                    <h3>Title</h3>
                    <p className="text-sm text-gray-500 text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consequatur voluptate sunt, expedita 
                        sed natus error magni, provident assumenda, impedit sapiente architecto quia veniam quaerat molestias 
                        quas voluptatum? Quae, voluptate!
                    </p>
                </div>
            </div>
        </div>
    )
}