 let allProducts = []
        let fetchData = async() => {
           try{

             let response = await fetch('https://dummyjson.com/products')
             let data = await response.json()
             allProducts = data
             console.log(allProducts);
             

           }catch(err){
            console.log('data not fount', err)
           }
        }


        fetchData()