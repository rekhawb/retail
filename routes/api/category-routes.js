const router = require('express').Router();
const res = require('express/lib/response');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
try{
const categoryData =await Category.findAll({
include:[{model:Product}]
});
res.status(200).json(categoryData);

}

catch(err){
  res.status(500).json(err);
}
});

router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
const categoryData = await Category.findByPk(req.params.id,{
  include: [{model:Product}]
})
res.status(200).json(categoryData);

  }catch(err){
 res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new category
  try{

    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
 Category.update(req.body,{where: {category_id:req.params.id}}).then(async (result)=>{
   const categoryData = await Category.findByPk(req.params.id,{
     include: [{model:Product}]
   });
  res.status(200).json(categoryData);
 });


}catch(err){
  res.status(500).json(err);
}
});

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try{
 Category.destroy({
   where : {category_id:req.params.id}
 }).then((result)=>{
   res.status(200).json({"message":"Record deleted"});
 })

  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
