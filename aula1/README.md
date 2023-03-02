<h1>Oque é algoritmo?</h1>
    <h3> Algoritmos estão presentes em várias funcionalidades digitais do dia a dia, como por exemplo quando acessamos um site, baixamos algum aplicativo, usamos GPS e muitas outras.

Porém, os algoritmos não estão presentes somente em meios digitais. Segundo o escritor, analista de sistemas, economista, matemático e teólogo José Augusto N. G. Manzano, algoritmos são conjuntos de passos finitos e organizados que, quando executados, resolvem um determinado problema.

Quando fazemos algo durante o dia que tenha uma rotina, isso também pode ser considerado um algoritmo. Por exemplo, ao atravessarmos a rua, inconscientemente realizamos vários passos para que isso aconteça: primeiro olhamos para o lado esquerdo, depois para o lado direito e, se não houver nenhum veículo se aproximando, podemos atravessar. Caso contrário, esperamos.

Algoritmo AtravessarRua {
    Olhar para a esquerda
    Olhar para a direita
    Se estiver vindo carro {
        Não atravesse
    } Senão {
        Atravesse
    }
}

O mesmo algoritmo pode ser feito com passos e condições diferentes para atingir o mesmo objetivo:

Algoritmo AtravessarRua {
    Olhar para a direita
    Olhar para a esquerda
    Se não estiver vindo carro {
        atravesse
    } Senão {
       Não Atravesse
    }
}

Porem, os mesmos passos e e condições não podem estar em qualquer ordem:

Algoritmo AtravessarRua {
    Atravesse
    Se estiver vindo carro {
        Olhar para a direita
    } Senão {
        Olhar para a esquerda
    }
    Não atravesse
}

Observe que neste exemplo, a pessoa primeiro atravessa a rua sem olhar, o que é um comportamento inadequado e perigoso. Em seguida, vai olhar para a esquerda se estiver vindo carro e para a direita se não estiver vindo. Porém, a ação de não atravessar não será executada em nenhuma condição, o que pode resultar em riscos para a segurança da pessoa e de outros.
</h3>