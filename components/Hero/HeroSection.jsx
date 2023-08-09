import HeroDireita from "./Direita";
import HeroEsquerda from "./Esquerda";

export default function Hero(){
    return (
        <div className="max-w-screen-2xl flex">
            <HeroEsquerda/>
            <HeroDireita/>
        </div>
    )
}