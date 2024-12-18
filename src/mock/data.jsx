export const productosDB = [
    {
        nombre: 'HACK 03 23',
        precio: 55000,
        marca: 'bullpadel',
        stock: 5,
        img: '/paleta-2.png',
        categoria: 'nuevos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        nombre: 'VERTEX 03 CTR 23',
        precio: 35000,
        marca: 'bullpadel',
        stock: 5,
        img: '/paleta-3.png',
        categoria: 'nuevos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        nombre: 'VERTEX 03 23',
        precio: 50000,
        marca: 'bullpadel',
        stock: 5,
        img: '/paleta-4.png',
        categoria: 'nuevos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        nombre: 'PRO LIGTH WOMAN',
        precio: 15000,
        marca: 'royal padel',
        stock: 5,
        img: '/paleta-5.png',
        categoria: 'ofertas',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        nombre: 'EUROPE MASTER PRO',
        precio: 28000,
        marca: 'royal padel',
        stock: 5,
        img: '/paleta-6.png',
        categoria: 'ofertas',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        nombre: 'ML10 PRO',
        precio: 45000,
        marca: 'nox',
        stock: 5,
        img: '/paleta-7.png',
        categoria: 'ofertas',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        nombre: 'AMERICA VS EUROPA',
        precio: 44000,
        marca: 'nox',
        stock: 5,
        img: '/paleta-8.png',
        categoria: 'ofertas',
        descrpcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {

        nombre: 'AIR VIPER',
        precio: 40000,
        marca: 'babolat',
        stock: 5,
        img: '/paleta-9.png',
        categoria: 'mas vendidos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        nombre: 'METALBONE HRD',
        precio: 38000,
        marca: 'adidas',
        stock: 5,
        img: '/paleta-10.png',
        categoria: 'mas vendidos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        nombre: 'MATCH 3.1',
        precio: 17000,
        marca: 'adidas',
        stock: 5,
        img: '/paleta-11.png',
        categoria: 'mas vendidos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        nombre: 'DRIVE LIGTH 3.1',
        precio: 9000,
        marca: 'adidas',
        stock: 5,
        img: '/paleta-12.png',
        categoria: 'mas vendidos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
]

export const getProducts = () => {
    let error = false
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (error) {
                rej('Hubo un error, intente mas tarde')
            } else {
                res(productos)
            }
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    let error = false
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!error) {
                let product = productos.find((item) => item.id === id)
                res(product)
            } else {
                rej('No hay datos')
            }
        }, 2000)
    })
}
