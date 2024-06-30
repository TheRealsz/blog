import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"

const CreatePostModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <button className="p-5 bg-main-500 rounded-full hover:bg-main-600 fixed bottom-5 right-3 md:hidden">
                        <Plus size={25} />
                    </button>
                    <button className="hidden md:flex justify-end items-center gap-1 bg-main-500 px-3 py-2 rounded-md hover:bg-main-600 font-semibold transition-all">
                        <Plus size={20} />
                        <span>
                            Novo Post
                        </span>
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreatePostModal