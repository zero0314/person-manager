package com.controller;

import com.alibaba.fastjson.JSONObject;
import com.annotation.IgnoreAuth;
import com.entity.Department;
import com.service.DepartmentService;
import com.utils.R;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.LinkedHashMap;

/**
 * 部门表(Department)表控制层
 *
 * @author makejava
 * @since 2023-04-28 14:52:51
 */
@RestController
@RequestMapping("department")
public class DepartmentController {
    /**
     * 服务对象
     */
    @Resource
    private DepartmentService departmentService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @PostMapping("query")
    @IgnoreAuth
    public R queryById(@RequestParam("id") Integer id) {
        return R.ok().put("data", this.departmentService.queryById(id));
    }

    /**
     * 分页查询
     *
     * @return 查询结果
     */
    @PostMapping("queryPage")
    @IgnoreAuth
    public R queryPage(@RequestBody JSONObject jsonObject) {
        Department department = jsonObject.getObject("department", Department.class);
        JSONObject data = new JSONObject(new LinkedHashMap<>());
        long count = departmentService.count(department);
        data.put("total", count);
        data.put("pageSize", jsonObject.get("size"));
        data.put("totalPage", (long) Math.ceil((double) count / jsonObject.getInteger("size")));
        data.put("currentPage", jsonObject.getInteger("page"));
        data.put("list", this.departmentService.queryPage(department, jsonObject.getInteger("page"), jsonObject.getInteger("size")));
        return R.ok().put("data", data);
    }

    /**
     * 查询列表
     *
     * @param department 筛选条件
     * @return 对象列表
     */
    @PostMapping("queryAll")
    @IgnoreAuth
    public R queryAll(@RequestBody Department department) {
        return R.ok().put("data", this.departmentService.queryAll(department));
    }

    /**
     * 新增数据
     *
     * @param department 实体
     * @return 新增结果
     */
    @PostMapping("add")
    @IgnoreAuth
    public R add(@RequestBody Department department) {
        return R.ok().put("data", this.departmentService.insert(department));
    }

    /**
     * 编辑数据
     *
     * @param department 实体
     * @return 编辑结果
     */
    @PostMapping("update")
    @IgnoreAuth
    public R edit(@RequestBody Department department) {
        return R.ok().put("data", this.departmentService.update(department));
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
        return R.ok().put("data", this.departmentService.deleteById(id));
    }

}

