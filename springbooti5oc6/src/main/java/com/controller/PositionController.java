package com.controller;

import com.alibaba.fastjson.JSONObject;
import com.annotation.IgnoreAuth;
import com.entity.Position;
import com.service.PositionService;
import com.utils.R;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.LinkedHashMap;

/**
 * 岗位表(Position)表控制层
 *
 * @author makejava
 * @since 2023-04-28 14:52:51
 */
@RestController
@RequestMapping("position")
public class PositionController {
    /**
     * 服务对象
     */
    @Resource
    private PositionService positionService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @PostMapping("query")
    @IgnoreAuth
    public R queryById(@RequestParam("id") Integer id) {
        return R.ok().put("data", this.positionService.queryById(id));
    }

    /**
     * 分页查询
     *
     * @return 查询结果
     */
    @PostMapping("queryPage")
    @IgnoreAuth
    public R queryByPage(@RequestBody JSONObject jsonObject) {
        Position position = jsonObject.getObject("position", Position.class);
        JSONObject data = new JSONObject(new LinkedHashMap<>());
        long count = positionService.count(position);
        data.put("total", count);
        data.put("pageSize", jsonObject.getInteger("size"));
        data.put("totalPage", (long) Math.ceil((double) count / jsonObject.getInteger("size")));
        data.put("currentPage", jsonObject.getInteger("page"));
        data.put("list", this.positionService.queryPage(position, jsonObject.getInteger("page"), jsonObject.getInteger("size")));
        return R.ok().put("data", data);
    }

    /**
     * 查询列表
     *
     * @param position 筛选条件
     * @return 对象列表
     */
    @PostMapping("queryAll")
    @IgnoreAuth
    public R queryAll(@RequestBody Position position) {
        return R.ok().put("data", this.positionService.queryAll(position));
    }

    /**
     * 新增数据
     *
     * @param position 实体
     * @return 新增结果
     */
    @PostMapping("add")
    @IgnoreAuth
    public R add(@RequestBody Position position) {
        return R.ok().put("data", this.positionService.insert(position));
    }

    /**
     * 编辑数据
     *
     * @param position 实体
     * @return 编辑结果
     */
    @PostMapping("update")
    @IgnoreAuth
    public R edit(@RequestBody Position position) {
        return R.ok().put("data", this.positionService.update(position));
    }

    /**
     * 删除数据
     *
     * @param id 主键
     * @return 删除是否成功
     */
    @PostMapping("delete")
    @IgnoreAuth
    public R deleteById(@RequestParam("id") Integer id) {
        return R.ok().put("data", this.positionService.deleteById(id));
    }

}

