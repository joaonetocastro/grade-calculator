import { EstrategiaDeCalculoDeNotas } from "../protocolos/EstrategiaDeCalculoDeNotas";
import { NotaLancada, NotaCalculada } from "../tipos/Nota";

export class EstrategiaComum implements EstrategiaDeCalculoDeNotas {
  calcularNotas(notasLancadas: NotaLancada[]): NotaCalculada[] {
    const notasSemestre1 = notasLancadas.filter(
      (nota) => nota.bimestre == 1 || nota.bimestre == 2
    );
    const notasSemestre2 = notasLancadas.filter(
      (nota) => nota.bimestre == 3 || nota.bimestre == 4
    );
    const notasSemestre3 = notasLancadas.filter(
      (nota) => nota.bimestre == 5 || nota.bimestre == 6
    );
    const notasSemestre4 = notasLancadas.filter(
      (nota) => nota.bimestre == 7 || nota.bimestre == 8
    );

    const notaSemestre1: NotaCalculada = {
      bimestre: 1,
      codigo: "Bimestral",
      pontos: notasSemestre1.reduce((acc, curr) => acc + curr.pontos, 0) / 4,
    };
    const notaSemestre2: NotaCalculada = {
      bimestre: 2,
      codigo: "Bimestral",
      pontos: notasSemestre2.reduce((acc, curr) => acc + curr.pontos, 0) / 4,
    };
    const notaSemestre3: NotaCalculada = {
      bimestre: 3,
      codigo: "Bimestral",
      pontos: notasSemestre3.reduce((acc, curr) => acc + curr.pontos, 0) / 4,
    };
    const notaSemestre4: NotaCalculada = {
      bimestre: 4,
      codigo: "Bimestral",
      pontos: notasSemestre4.reduce((acc, curr) => acc + curr.pontos, 0) / 4,
    };

    const notaFinal: NotaCalculada = {
      bimestre: 4,
      codigo: "Final",
      pontos:
        (notaSemestre1.pontos +
          notaSemestre2.pontos +
          notaSemestre3.pontos +
          notaSemestre4.pontos) /
        4,
    };

    return [
      notaSemestre1,
      notaSemestre2,
      notaSemestre3,
      notaSemestre4,
      notaFinal,
    ];
  }
}
