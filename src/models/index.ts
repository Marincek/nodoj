'use strict';

var fs        = require('fs');
var path      = require('path');
import {Sequelize} from 'sequelize-typescript';
import { UserFactory } from './User';
import { DbInterface } from '../typings/DbInterface';
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../db/config.json')[env];
var db        = {};
 

// export const sequelize =  new Sequelize({
//         database: 'nodeTest',
//         dialect: 'postgres',
//         username: 'postgres',
//         password: 'postgres'
// });

//sequelize.addModels([User]);

export const createModels = (): DbInterface => {
        console.log("console "+ __dirname);
      //  const { database, username, password, params } = config;
      //  const sequelize = new Sequelize(database, username, password, params);
        const sequelize = new Sequelize({
                database: 'nodeTest',
                dialect: 'postgres',
                username: 'postgres',
                password: 'postgres',
        });
      
        const db: DbInterface = {
          sequelize,
          Sequelize,
          User: UserFactory(sequelize, Sequelize)
        };
      
        return db;
};