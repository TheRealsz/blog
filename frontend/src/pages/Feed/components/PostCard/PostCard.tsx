import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { IPosts } from "../../Feed"
import PostCardDropdown from "./PostCardDropdown/PostCardDropdown"
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { DialogDescription } from "@radix-ui/react-dialog"
import { getUserInfo } from "@/utils/userStorage"

const PostCard = ({ authorName, createdAt, description, title, authorID, id }: IPosts) => {

    const loggedUserId = getUserInfo("_id")
    const formattedDate = format(new Date(createdAt), 'dd MMM', { locale: ptBR });
    const isPostOwner = loggedUserId[0] === authorID


    return (
        <Dialog>
            <DialogTrigger className="text-left w-full xl:w-[76rem]">
                <div className="flex h-72 py-8 px-6 flex-col gap-5 rounded-lg border-solid border-2 border-dark-40 w-full bg-dark-20 md:p-10 md:gap-6 xl:gap-5">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-sm font-medium text-main-500 md:text-base xl:text-lg">{authorName}</span>
                            <span className="text-xs font-medium text-white/70">{formattedDate}</span>
                        </div>
                        <div className={isPostOwner ? "block" : "hidden"}>
                            <PostCardDropdown
                                description={description}
                                title={title}
                                id={id}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-medium text-ellipsis xl:text-2xl">{title}</h3>
                        <p className="text-dark-50 text-sm line-clamp-5 font-medium leading-6 md:text-base xl:text-xl xl:leading-8 xl:line-clamp-4">{description}</p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="w-10/12 bg-dark-20 border-none rounded-lg gap-8 flex flex-col py-10 max-h-[600px]">
                <DialogHeader className="text-left">
                    <h3 className="text-2xl font-medium">{title}</h3>
                    <p className="text-sm font-medium text-white/70">
                        {authorName}
                        <span className="text-dark-50"> - {formattedDate}</span>
                    </p>
                </DialogHeader>
                <DialogDescription className="flex-1 overflow-y-auto h-full">
                    <p className="text-dark-50 text-sm font-medium leading-6">{description}</p>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

export default PostCard