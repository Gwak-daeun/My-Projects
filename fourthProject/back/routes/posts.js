const express = require('express');
const {Op} = require('sequelize');

const {Post, User, Image, Comment} = require('../models');

const router = express.Router();

router.get('/', async(req, res,  next) => {
    try{

        const posts = await Post.findAll({
            
            limit: 4, //게시글 10개 가져오기
            order: [
                ['createdAt', 'DESC'], 
            ], 
            include: [{
                model: Image
            }]
        });
        res.status(200).json(posts);
    }
    catch(error){
        console.log(error);
        next(error);
    } 
});

router.get('/allLooks', async(req, res, next) => {
    try{
        
        const where = {};
        if(parseInt(req.query.lastId, 10)){
            where.id = {[Op.lt]: parseInt(req.query.lastId, 10)} //lastId보다 작은 id
        }

        const posts = await Post.findAll({
            where,
            limit: 20, 
            order: [
                ['createdAt', 'DESC'], 
            ],
            include: [{
                model: User, 
                attributes: ['id', 'nickname'] 
            },{
                model: Image
            }
            ,{
                model: User,
                as: 'Likers', 
                attributes: ['id']
            }]
        });
        res.status(200).json(posts);
    }
    catch(error){
        console.error(error);
        next(error);
    }
});

router.get('/', async(req, res,  next) => {
    try{

        const where = {};
        if(parseInt(req.query.lastId, 10)){
            where.id = {
                        [Op.lt]: parseInt(req.query.lastId, 10) + 30,
                        [Op.gt]: parseInt(req.query.lastId, 10) - 30,
                        } 
        }

        const posts = await Post.findAll({
            
            limit: 10, 
            order: [
                ['createdAt', 'DESC'],
                [Comment, 'createdAt', 'DESC'] 
            ], 
            include: [{
                model: User, 
                attributes: ['id', 'nickname'] 
            },{
                model: Image 
            },{
                model: Comment,
                include: {
                    model: User, 
                    attributes: ['id', 'nickname']
                }
            },{
                model: User,
                as: 'Likers', 
                attributes: ['id']
            }]
        });
        res.status(200).json(posts);
    }
    catch(error){
        console(error);
        next(error);
    }
   
});

module.exports = router;