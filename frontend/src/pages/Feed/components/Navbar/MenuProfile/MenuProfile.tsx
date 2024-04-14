import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import EditNameModal from "./EditNameModal/EditNameModal";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { useUser } from "@/context/UserContext";
import ChangePasswordModal from "./ChangePasswordModal/ChangePasswordModal";

const MenuProfile = () => {
    const { user } = useUser()
    const fullname = user?.fullname || ""
    const fullnameFormatted = fullname
        .split(" ")
        .map((name: string) => name.charAt(0))
        .slice(0, 2)
        .join("");

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="border-none outline-none">
                <div className="rounded-full border-2 border-dark-40 flex items-center justify-center w-10 h-10 cursor-pointer md:w-12 md:h-12 md:border-2 xl:w-14 xl:h-14">{fullnameFormatted}</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-dark-20 text-white border-dark-30">
                <DropdownMenuLabel>{fullname}</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-dark-30" />
                <Dialog>
                    <DialogTrigger asChild>
                        <DropdownMenuItem className="cursor-pointer" onSelect={(event) => event.preventDefault()}>Editar perfil</DropdownMenuItem>
                    </DialogTrigger>
                    <EditNameModal fullnameFormatted={fullnameFormatted} />
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <DropdownMenuItem className="cursor-pointer" onSelect={(event) => event.preventDefault()}>Trocar senha</DropdownMenuItem>
                    </DialogTrigger>
                    <ChangePasswordModal />
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <DropdownMenuItem className="cursor-pointer focus:bg-red-500 focus:text-white" onSelect={(event) => event.preventDefault()}>Excluir conta</DropdownMenuItem>
                    </DialogTrigger>
                    <ChangePasswordModal />
                </Dialog>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default MenuProfile