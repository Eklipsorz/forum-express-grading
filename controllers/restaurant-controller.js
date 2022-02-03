const { Restaurant, Category, User } = require('../models')

const restaurantController = {
  getRestaurants: (req, res, next) => {
    // res.render('restaurants')
    return Restaurant.findAll({ raw: true, nest: true, include: [Category] })
      .then(restaurants => restaurants.map(r => ({
        ...r,
        description: r.description.substring(0, 50)
      })))
      .then(restaurants => res.render('restaurants', { restaurants }))
      .catch(error => next(error))
  }
}

exports = module.exports = restaurantController
