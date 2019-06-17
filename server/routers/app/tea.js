const express = require("express");
const config = require("../../config");

const router = new express.Router();

//banner
router.get("/new_info", (req, res) => {
  let path = `${config.protocol}://${config.host}:${config.port}`;
  let data = [
    { id: 1, name: "原创芝士茗茶", picUrl: `${path}/static/banner1.jpg` },
    { id: 2, name: "鲜茶水果系列", picUrl: `${path}/static/banner2.jpg` },
    { id: 3, name: "轻芝士茗茶系列", picUrl: `${path}/static/banner3.jpg` },
    { id: 4, name: "当季水果限定系列", picUrl: `${path}/static/banner4.jpg` }
  ];
  res.json({
    code: 0,
    message: "请求成功",
    data
  });
});

//店铺列表
router.get("/shoplist", (req, res) => {
  let data = require("../../data/shops.json");
  res.json({
    code: 0,
    message: "请求成功",
    data
  });
});

//商品列表
router.get("/goods", (req, res) => {
  let data = require("../../data/tea.json");
  res.json({
    code: 0,
    message: "请求成功",
    data
  });
});

//动态
router.get('/news', (req, res)=>{
  let data = require('../../data/news.json');
  res.json({
    code: 0,
    message: '请求成功',
    data
  })
})

module.exports = router;
