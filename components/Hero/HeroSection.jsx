import HeroDireita from "./Direita";
import HeroEsquerda from "./Esquerda";
import HeroInfo from "./Info";

export default function Hero(){
    return (
        <>
            <div className="max-w-screen-2xl flex">
                <HeroEsquerda/>
                <HeroDireita/>
            </div>
            <HeroInfo/>
        </>
    )
}