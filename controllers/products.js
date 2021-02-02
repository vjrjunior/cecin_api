const products = require('../db_apis/products.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);
    // context.skip = parseInt(req.query.skip, 10);
    // context.limit = parseInt(req.query.limit, 10);

    const rows = await products.find(context);

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;

function getProductFromRec(req) {
  const product = {
    nome: req.body.nome,
    codigo_original: req.body.codigo_original,
    codigo_barras: req.body.codigo_barras,
    peso: req.body.peso,
    largura_caixa: req.body.largura_caixa,
    altura_caixa: req.body.altura_caixa,
    comprimento_caixa: req.body.comprimento_caixa,
    data_hora_alteracao: req.body.data_hora_alteracao
  };

  return product;
}

// async function post(req, res, next) {
//   try {
//     let product = getProductFromRec(req);

//     product = await products.create(product);

//     res.status(201).json(product);
//   } catch (err) {
//     next(err);
//   }
// }

// module.exports.post = post;

// async function put(req, res, next) {
//   try {
//     let product = getProductFromRec(req);

//     product.product_id = parseInt(req.params.id, 10);

//     product = await products.update(product);

//     if (product !== null) {
//       res.status(200).json(product);
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     next(err);
//   }
// }

// module.exports.put = put;

// async function del(req, res, next) {
//   try {
//     const id = parseInt(req.params.id, 10);

//     const success = await products.delete(id);

//     if (success) {
//       res.status(204).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     next(err);
//   }
// }

// module.exports.delete = del;

