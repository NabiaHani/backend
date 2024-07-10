const getAllProducts = async (req, res) =>{
    res.status(200).json({msg: "this is detail page"})
}

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg: "this is complete detail page"})
}

module.exports = { getAllProducts, getAllProductsTesting}