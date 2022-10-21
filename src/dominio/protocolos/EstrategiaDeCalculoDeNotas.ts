import { NotaCalculada, NotaLancada } from "../tipos/Nota";

export interface EstrategiaDeCalculoDeNotas {
  calcularNotas(notasLancadas: NotaLancada[]): NotaCalculada[];
}
