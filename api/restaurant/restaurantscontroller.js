const Restaurants = require('./restaurantsmodel')


/**
* Get list of all posts confirmed by the blockchain
* @returns {Tweet[]}
*/


const getCuisines = async (req, res) => {
  try {
    
    const Cusine = await Restaurants.find({}).select('Cuisines');
    

    const AllCusine = Cusine.map(g => g.Cuisines);
     
    let r =[];

   for (var word of AllCusine) {
    console.log(word);
    const y = word.split(',')
    for( let y1 of y){
      r.push(y1.trimLeft())
    }
    
  }
  const c = [ ...new Set(r) ].filter(n => n)
    
res.send(c)

  } catch (err) {
    console.error(err)
  }
}

const getSearchRestaurants = async (req, res) => {
  try {
    console.log(req.body.obj)
    const { Res_Name,
      Cuisines,
      sort,
      sortOrder,
      skip } = req.body.obj;

    const CountMatchedRestrants = await Restaurants

      .aggregate([

        {
          $lookup: {
            from: "restaurantsAdd", // collection name in db
            localField: "Restaurant ID",
            foreignField: "Restaurant ID",
            as: "restaurantsAdd"
          }
        },
       
        { $match: { "Restaurant Name": { $regex: Res_Name, $options: 'i' } } },
        { $match: { "Cuisines": { $regex: Cuisines, $options: 'i' } } },
        {
          $count: "ResultCount"
        }

     


      ])
      .exec();
    console.log(CountMatchedRestrants[0].ResultCount)


    const matchedRestrants = await Restaurants

      .aggregate([

        {
          $lookup: {
            from: "restaurantsAdd", // collection name in db
            localField: "Restaurant ID",
            foreignField: "Restaurant ID",
            as: "restaurantsAdd"
          }
        },
        

        { $match: { "Restaurant Name": { $regex: Res_Name, $options: 'i' } } },
        { $match: { "Cuisines": { $regex: Cuisines, $options: 'i' } } },
        { $sort: { [sort]: sortOrder } }
      


      ])
      .skip(skip)
      .limit(10)
      .exec();


    Resobj = {
      Count: CountMatchedRestrants[0].ResultCount,
      matchedRestrants

    }

    res.send(Resobj);


  } catch (err) {
    console.error(res)
  }
}
 
const getRestaurants = async (req, res) => {
  console.log(req.body)
  let dataReq = {
    Res_Name: "",
    Cuisines: "",
    sort: "Aggregate rating",
    sortOrder: -1,
    skip: 0
  }

  try {
    

    const RestrantsCount = await Restaurants

      .aggregate([

        {
          $lookup: {
            from: "restaurantsAdd", // collection name in db
            localField: "Restaurant ID",
            foreignField: "Restaurant ID",
            as: "restaurantsAdd"
          }
        },
        {
          $count: "ResultCount"
        }


      ])

      .exec();


    const Restrants = await Restaurants

      .aggregate([

        {
          $lookup: {
            from: "restaurantsAdd", // collection name in db
            localField: "Restaurant ID",
            foreignField: "Restaurant ID",
            as: "restaurantsAdd"
          }
        }
      ])
      .skip(0)
      .limit(10)
      .exec();

    Resobj = {
      Count: RestrantsCount[0].ResultCount,
      Restrants

    }

    res.send(Resobj);

  } catch (err) {
    console.error(err)
  }
}


module.exports = { getRestaurants, getSearchRestaurants ,getCuisines }
