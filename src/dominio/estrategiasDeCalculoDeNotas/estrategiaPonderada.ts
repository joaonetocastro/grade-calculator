import { EstrategiaDeCalculoDeNotas } from "../protocolos/EstrategiaDeCalculoDeNotas";
import { NotaLancada, NotaCalculada } from "../tipos/Nota";

export class EstrategiaPonderada implements EstrategiaDeCalculoDeNotas {
  calcularNotas(notasLancadas: NotaLancada[]): NotaCalculada[] {
    const peso1 = 1;
    const peso2 = 2;
    const peso3 = 3;
    const peso4 = 4;

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
        (notaSemestre1.pontos * peso1 +
          notaSemestre2.pontos * peso2 +
          notaSemestre3.pontos * peso3 +
          notaSemestre4.pontos * peso4) /
        (peso1 + peso2 + peso3 + peso4),
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
