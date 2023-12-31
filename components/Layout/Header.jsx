export default function Header(){
    return (
        <header className="h-20 flex items-center justify-between max-w-screen-2xl	 m-auto">
            <div className="w-32 h-20 bg-red-600"></div>
            <div className="flex items-center gap-12">
                <div className="flex items-center gap-12 mr-4 poppins text-xl">
                    <a href=""><div className="font-medium pb-2 mt-2 textColorPrimary borderBotton">Início</div></a>
                    <a href=""><div className="font-medium textPrimaryHover">Sobre</div></a>
                    <a href=""><div className="font-medium textPrimaryHover">Projetos</div></a>
                    <a href=""><div className="font-medium textPrimaryHover">Habilidades</div></a>
                    <a href=""><div className="font-medium textPrimaryHover">Contato</div></a>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-400"></div>
            </div>
        </header>
    )   
}