import { EstrategiaDeCalculoDeNotas } from "./protocolos/EstrategiaDeCalculoDeNotas";
import { NotaCalculada, NotaLancada } from "./tipos/Nota";

export class CalculadoraDeNotas {
  estrategia: EstrategiaDeCalculoDeNotas;

  constructor(estrategia: EstrategiaDeCalculoDeNotas) {
    this.estrategia = estrategia;
  }

  calcularNotas(notasLancadas: NotaLancada[]): NotaCalculada[] {
    const resultado = this.estrategia.calcularNotas(notasLancadas);
    // aqui pode fazer alguma coisa comum para todos, como por exemplo gerar o pdf do boletim e salvar em algum lugar ou algo do tipo
    return resultado.map((nota) => ({
      ...nota,
      pontos: Number(nota.pontos.toFixed(2)),
    }));
  }
}
