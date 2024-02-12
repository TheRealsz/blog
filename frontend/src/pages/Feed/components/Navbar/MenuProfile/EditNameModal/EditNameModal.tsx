import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"


const EditNameModal = ({ fullnameFormatted }: { fullnameFormatted: string }) => {
    return (
        <DialogContent className="w-10/12 bg-dark-20 border-none rounded-lg gap-8 py-10">
            <DialogHeader className="flexs items-center">
                <DialogTitle>Editar perfil</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center w-full gap-6">
                <div className="rounded-full border-2 border-dark-40 flex items-center justify-center w-16 h-16 text-xl md:w-20 md:h-20 md:border-2 md:text-2xl">{fullnameFormatted}</div>
                <form className="flex w-11/12 flex-col gap-6 md:w-9/12">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Nome completo</label>
                        <input type="text" className="w-full bg-dark-40 text-dark-50 p-2 rounded-md border-solid border border-dark-40 focus:border-main-900 outline-none 2xl:py-2" placeholder="Insira seu nome completo"/>
                    </div>
                    <button className="w-full bg-main-500 py-2 rounded-md text-white hover:bg-main-600 transition-all outline-none 2xl:text-lg">Salvar</button>
                </form>
            </div>
        </DialogContent>
    )
}

export default EditNameModal