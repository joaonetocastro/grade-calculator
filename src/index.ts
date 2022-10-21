import { Request, Response } from "express";
import { CalculadoraDeNotas } from "./dominio/CalculadoraDeNotas";
import { EstrategiaComum } from "./dominio/estrategiasDeCalculoDeNotas/estrategiaComum";
import { EstrategiaPonderada } from "./dominio/estrategiasDeCalculoDeNotas/estrategiaPonderada";
import { NotaLancada } from "./dominio/tipos/Nota";

const express = require("express");
const app = express();
const port = 3000;

app.post("/:estrategia", (req: Request, res: Response) => {
  const nomeEstrategia = req.params.estrategia;
  const notas: NotaLancada[] = [
    {
      bimestre: 1,
      codigo: "Mensal",
      pontos: 10,
    },
    {
      bimestre: 1,
      codigo: "Bimestral",
      pontos: 7,
    },
    {
      bimestre: 2,
      codigo: "Mensal",
      pontos: 5,
    },
    {
      bimestre: 2,
      codigo: "Bimestral",
      pontos: 3,
    },
    {
      bimestre: 3,
      codigo: "Mensal",
      pontos: 9,
    },
    {
      bimestre: 3,
      codigo: "Bimestral",
      pontos: 6.3,
    },
    {
      bimestre: 4,
      codigo: "Mensal",
      pontos: 2,
    },
    {
      bimestre: 4,
      codigo: "Bimestral",
      pontos: 1,
    },
    {
      bimestre: 5,
      codigo: "Mensal",
      pontos: 7,
    },
    {
      bimestre: 5,
      codigo: "Bimestral",
      pontos: 7,
    },
    {
      bimestre: 6,
      codigo: "Mensal",
      pontos: 1,
    },
    {
      bimestre: 6,
      codigo: "Bimestral",
      pontos: 1.5,
    },
    {
      bimestre: 7,
      codigo: "Mensal",
      pontos: 9,
    },
    {
      bimestre: 7,
      codigo: "Bimestral",
      pontos: 4,
    },
    {
      bimestre: 8,
      codigo: "Mensal",
      pontos: 4,
    },
    {
      bimestre: 8,
      codigo: "Bimestral",
      pontos: 6,
    },
  ];
  const estrategia =
    nomeEstrategia === "ponderada"
      ? new EstrategiaPonderada()
      : new EstrategiaComum();
  const calculadora = new CalculadoraDeNotas(estrategia);
  const resultado = calculadora.calcularNotas(notas);
  return res.json(resultado);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
