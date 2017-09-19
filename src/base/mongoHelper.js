/**
 * Created by Administrator on 2017/6/15.
 */
import mongoose from 'mongoose';
const log = require('log4js').getLogger('base/mongoHelper');
import util from 'util';
import cfg from '../../config/app';
mongoose.connect(`mongodb://${cfg.db.conn}`);

class MongoHelper {
    /***
     * Save kittenModel的数据
     * @param kittenModel
     * @returns {Promise}
     */
    static async save({kittenModel}) {
        return await new Promise((resolve,reject) => {
            kittenModel.save((err,productRn,numAffected) =>{
                log.info(`numAffected的值为：${numAffected}`);
                if(err) reject(err);
                resolve(productRn);
            })
        })
    }

    /***
     * 查询数据
     * @param condition
     * @param queryField
     * @param options
     * @param KittenModel
     * @returns {Promise}
     */
    static async search({condition, queryField, options, KittenModel }){
        return await new Promise((resolve, reject) => {
            KittenModel.find(condition, queryField, options, (err, docs) => {
                log.info(`docs的值为：${docs}`);
                if (err) reject(err);
                resolve(docs);
            });
        });
    }
}

export { MongoHelper };