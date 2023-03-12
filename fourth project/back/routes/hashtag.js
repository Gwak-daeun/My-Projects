const express = require('express');
const { Op } = require('sequelize');

const { User, Hashtag, Image, Post, Reference } = require('../models');

const router = express.Router();

router.get('/:tag', async (req, res, next) => {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
    } 
    const posts = await Post.findAll({
      where,
      limit: 20,
      include: [{
        model: Hashtag,
        where: { name: decodeURIComponent(req.params.tag) },
      }, {
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: User,
        through: 'Like',
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Reference,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }],
      }],
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get('/keywords/:keyword', async(req, res, next) => {

  try{

    console.log("키워드 찾기 데이터: ", decodeURIComponent(req.params.keyword));

    const word = decodeURIComponent(req.params.keyword);

    const autoSearch = await Hashtag.findAll({
      where: {name: {[Op.like]: `%${word}%`}}

    });

    const finalWords = Array.from(new Set(autoSearch.map((hashtag) => hashtag.dataValues.name))).map((name) => autoSearch.find((hashtag) => hashtag.dataValues.name === name));


    console.log("파이널: ", finalWords);

    res.status(200).json(finalWords);
  } catch (e) {
    console.error(e);
    next(e);
  }

});

module.exports = router;