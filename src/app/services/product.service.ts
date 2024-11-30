import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  getProductsData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Café Espresso',
        description: 'Product Description',
        image:
          'https://conscienciacafe.com.br/wp-content/uploads/2023/09/cafe-espresso-maquina-1024x683.jpg',
        price: 8,
        category: 'Coffee',
        quantity: 24,
        inventoryStatus: 'Em Estoque',
        rating: 5,
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Mocha',
        description: 'Product Description',
        image:
          'https://uniquecafes.com.br/wp-content/uploads/2022/04/Passo-5-Mocha.webp',
        price: 15,
        category: 'Coffee',
        quantity: 61,
        inventoryStatus: 'Sem Estoque',
        rating: 4,
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Latte Macchiato',
        description: 'Product Description',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/2/2b/Latte_macchiato.jpg',
        price: 12,
        category: 'Coffee',
        quantity: 2,
        inventoryStatus: 'Baixo Estoque',
        rating: 3,
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Macchiatella',
        description: 'Product Description',
        image:
          'https://foodisafourletterword.com/wp-content/uploads/2022/01/Nutella_Mocha_Latte_Recipe.jpg',
        price: 20,
        category: 'Coffee',
        quantity: 25,
        inventoryStatus: 'Em Estoque',
        rating: 5,
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Prensa Francesa',
        description: 'Product Description',
        image:
          'https://blog.coffeeandjoy.com.br/wp-content/uploads/2021/08/coffeeandjoy_como_fazer_cafe_na_prensa_francesa.jpg',
        price: 10,
        category: 'Coffee',
        quantity: 73,
        inventoryStatus: 'Em Estoque',
        rating: 4,
      },
    ];
  }

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }

  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}
