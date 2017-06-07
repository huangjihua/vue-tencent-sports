/**
 * at by zyzhang
 */
const state = {
  // 路由结构
  routes: [
    [{name: '推荐', url: '/competition/recommend'}, {name: '视频', url: '/competition/video'}],
    [{name: '热帖', url: '/community/hotpost'},{name: '我的圈子', url: '/community/mycircle'}, {name: '活动', url: '/community/activies'}, {name: '全部', url: '/community/all'}],
    [{name: '关注',}, {name: '全部', url: '/agenda/all'},{name: '热门', url: '/agenda/popular'}]
  ],
}

module.exports = state;
