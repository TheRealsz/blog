import { getUserInfo } from "@/utils/userStorage";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MenuProfile = () => {
    const fullname = getUserInfo("fullname")
    const fullnameFormatted = fullname
        .split(" ")
        .map((name: string) => name.charAt(0))
        .slice(0, 2)
        .join("");

    return (
        <>
            <DropdownMenu >
                <DropdownMenuTrigger className="border-none outline-none">
                    <div className="rounded-full border-2 border-dark-40 flex items-center justify-center w-10 h-10 cursor-pointer md:w-12 md:h-12 md:border-2 xl:w-14 xl:h-14">{fullnameFormatted}</div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-dark-20 text-white border-dark-30">
                    <DropdownMenuLabel>{fullname}</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-dark-30" />
                    <DropdownMenuItem>Editar perfil</DropdownMenuItem>
                    <DropdownMenuItem>Trocar senha</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

export default MenuProfile