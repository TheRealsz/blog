import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical, Pencil, Trash } from "lucide-react";
import PostModal from "../../PostModal/PostModal";

const PostCardDropdown = () => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="" asChild>
                <MoreVertical className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-dark-20 text-white border-dark-30">
                <PostModal>
                    <DropdownMenuItem className="cursor-pointer" onSelect={(event) => event.preventDefault()}>
                        <div className="flex gap-2 items-center">
                            <Pencil />
                            <span>Editar</span>
                        </div>
                    </DropdownMenuItem>
                </PostModal>
                <DropdownMenuItem className="cursor-pointer text-red-600 focus:bg-red-600 focus:text-white">
                    <div className="flex gap-2 items-center">
                        <Trash />
                        <span>Excluir</span>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default PostCardDropdown;