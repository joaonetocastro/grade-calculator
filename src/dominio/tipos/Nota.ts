export type CodigoNotaLancada =
  | "Bimestral"
  | "Mensal"
  | "Recuperacao"
  | "Final"
  | "Qualitativo"
  | "Simulado";

export interface NotaLancada {
  codigo: CodigoNotaLancada;
  bimestre: number;
  pontos: number;
}

export type CodigoNotaCalculada =
  | "Bimestral"
  | "Mensal"
  | "Recuperacao"
  | "Final";

export interface NotaCalculada {
  codigo: CodigoNotaCalculada;
  bimestre: number;
  pontos: number;
}
