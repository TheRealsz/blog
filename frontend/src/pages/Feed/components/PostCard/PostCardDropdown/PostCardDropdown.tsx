import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical, Pencil, Trash } from "lucide-react";
import PostModal from "../../PostModal/PostModal";
import { IPosts } from "@/pages/Feed/Feed";
import DeletePostModal from "./DeletePostModal/DeletePostModal";

type IPostCardDropdown = Pick<IPosts, 'id' | 'title' | 'description'>

const PostCardDropdown = ({ id, title, description }: IPostCardDropdown) => {

    const handleSelectDropdownItem = (event: Event) => {
        event.stopPropagation()
        event.preventDefault()
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="" asChild>
                <MoreVertical className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-dark-20 text-white border-dark-30 flex flex-col">
                <PostModal
                    description={description}
                    postId={id}
                    title={title}
                >
                    <DropdownMenuItem className="cursor-pointer" onSelect={handleSelectDropdownItem}>
                        <div className="flex gap-2 items-center">
                            <Pencil />
                            <span>Editar</span>
                        </div>
                    </DropdownMenuItem>
                </PostModal>
                <DeletePostModal>
                    <DropdownMenuItem className="cursor-pointer text-red-600 focus:bg-red-600 focus:text-white" onSelect={handleSelectDropdownItem}>
                        <div className="flex gap-2 items-center">
                            <Trash />
                            <span>Excluir</span>
                        </div>
                    </DropdownMenuItem>
                </DeletePostModal>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default PostCardDropdown;