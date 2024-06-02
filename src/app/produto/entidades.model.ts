export class Produto {
  id: number;
  descricao: string;
  preco: number;
  codbarras: string;
  estoque: number;
  imagem: string;
  categoria: string;
  subcategoria: string;
  ativo: string;


  constructor(data: any) {
      this.id = data.id;
      this.descricao = data.descricao;
      this.preco = data.preco;
      this.codbarras = data.codbarras;
      this.estoque = data.estoque;
      this.imagem = data.imagem;
      this.categoria = data.categoria;
      this.subcategoria = data.subcategoria;
      this.ativo = data.ativo;

  }
}