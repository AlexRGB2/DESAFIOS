export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images?: String[];
}

export const products = [
  {
    id: 1,
    name: "Phone XL",
    price: 799,
    description: "A large phone with one of the best screens",
    images: [
      "https://tienda.movistar.com.mx/media/catalog/product/cache/087d8656b93b378449aad7de37c3d04e/1/4/14_pro_ambos_morado_128.png",
    ],
  },
  {
    id: 2,
    name: "Phone Mini",
    price: 699,
    description: "A great phone with one of the best cameras",
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_932957-MLA47782545553_102021-O.jpg",
    ],
  },
  {
    id: 3,
    name: "Phone Standard",
    price: 299,
    description: "Lorem Ipsum",
    images: ["https://m.media-amazon.com/images/I/71lQfltQGfL._AC_SY445_.jpg"],
  },
  {
    id: 4,
    name: "Asus ZenBook Duo",
    price: 28990,
    description:
      "ASUS ZenBook Duo 14 UX482 visualización táctil FHD de 14 pulgadas, plataforma Intel EVo, Core i7-1195G7, 8 GB de RAM, SSD PCIe de 512 GB.",
    images: ["https://m.media-amazon.com/images/I/81MhsoT3+uL._AC_SY450_.jpg"],
  },
  {
    id: 5,
    name: "Xbox Series X",
    price: 11794,
    description:
      "Presentamos Xbox Series X, la consola Xbox más rápida y potente de la historia. Juega miles de títulos de cuatro generaciones de consolas.",
    images: ["https://m.media-amazon.com/images/I/61JGKhqxHxL._AC_SX466_.jpg"],
  },
  {
    id: 6,
    name: "WD_BLACK 1TB",
    price: 1708,
    description:
      "Entra en el juego rápidamente mientras haces zoom más allá de los tiempos de carga con velocidades de hasta 5,150 MB/s. ",
    images: ["https://m.media-amazon.com/images/I/51vNa5DEr4L._AC_SY450_.jpg"],
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
