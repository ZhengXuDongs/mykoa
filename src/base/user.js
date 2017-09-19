/**
 * Created by Administrator on 2017/6/15.
 */
import KittenModel from '../model/user';
const log = require('log4js').getLogger('base/user');
import { MongoHelper } from '../base/mongoHelper';

class UserBase {
    /**
     * 保存trip
     * @param timeData
     * @returns {Promise}
     */
    static async save({ userData }) {
        log.info(JSON.stringify(userData));
        const kittenModel = new KittenModel(userData);
        return await MongoHelper.save({ kittenModel });
    }

    /**
     * 查询leaveSubData
     * @param condition
     * @param queryField
     * @param options
     * @returns {Promise}
     */
    static async search({ condition, queryField, options }) {
        return await MongoHelper.search({ condition, queryField, options, KittenModel });
    }

    /**
     * 更新leaveSubData的值
     * @param condition 查询条件
     * @param updateDocs 更新的docs
     * @param options 组合条件
     * @returns {Promise}
     */
    static async update({condition, updateDocs, options}) {
        log.info(`doc的值为：${updateDocs}`);
        return await MongoHelper.update({condition, updateDocs, options, KittenModel});
    }

    /**
     * 删除timeData的值
     * @returns {Promise}
     * @param condition 查询条件
     */
    static async delete({condition}){
        log.info(`doc的值为：${JSON.stringify(condition)}`);
        return await MongoHelper.deleteKit({ condition, KittenModel });
    }
}

export {UserBase};