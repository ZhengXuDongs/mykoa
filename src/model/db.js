/**
 * Created by Administrator on 2017/6/15.
 */
const mongoose = require('mongoose');
import cfg from '../../config/app.js';


// 缺省连接池为 5个
const conn = mongoose.createConnection(
  cfg.db.conn,
    {server:{poolSize:cfg.db.poolSize}}
);

conn.on('error',err=> console.log(err));

export default conn;