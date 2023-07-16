import request from '@/utils/request'

// 查询渠道列表
export function listChannel(query) {
    return request({
        url: '/tienchin/channel/list',
        method: 'get',
        params: query
    })
}

// 查询渠道详细
export function getChannel(channelId) {
    return request({
        url: '/tienchin/channel/' + channelId,
        method: 'get'
    })
}

// 新增渠道
export function addChannel(data) {
    return request({
        url: '/tienchin/channel/create',
        method: 'post',
        data: data
    })
}

// 修改渠道
export function updateChannel(data) {
    return request({
        url: '/tienchin/channel/update',
        method: 'put',
        data: data
    })
}


// 删除渠道
export function delChannel(channelId) {
    return request({
        url: '/tienchin/channel/' + channelId,
        method: 'delete'
    })
}


