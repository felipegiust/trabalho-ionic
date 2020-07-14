import { merge, random } from "lodash";

export class CrudService<T> {
  data: T[] = [];

  constructor() {
    
  }

  salvar(bean: T) {
    if (bean["id"]) {
      this.update(bean);
    } else {
      bean["id"] = this.generateId();
      this.data.push(bean);
    }
  }

  update(bean: T) {
    const { id } = bean as any;
    const beanSalvo = this.data.find((d) => d["id"] === id);
    if (!beanSalvo) {
      throw new Error("O recurso não existe");
    }

    merge(beanSalvo, bean);
  }

  getAll(termoPesquisa: string = "") {
    const termo = termoPesquisa.toLowerCase();
    return this.data.filter((bean) => {
      return bean["nome"].toLowerCase().includes(termo);
    });
  }

  getById(id): T {
    return Object.assign(
      {},
      this.data.find((d) => d["id"] === id)
    );
  }

  generateId(): number {
    return random(0, 500);
  }

  delete(id) {
    this.data = this.data.filter(d => d['id'] !== id)
  }
}
