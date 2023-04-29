package com.service;

import com.entity.Department;
import java.util.List;

/**
 * 部门表(Department)表服务接口
 *
 * @author makejava
 * @since 2023-04-28 14:52:51
 */
public interface DepartmentService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Department queryById(Integer id);

    /**
     * 分页查询
     *
     * @param department 筛选条件
     * @return 查询结果
     */
    List<Department> queryPage(Department department, Integer offset, Integer size);

    /**
     * 查询列表
     * @param department 筛选条件
     * @return 对象列表
     */
    List<Department> queryAll(Department department);

    /**
     * 统计总行数
     *
     * @param department 查询条件
     * @return 总行数
     */
    long count(Department department);

    /**
     * 新增数据
     *
     * @param department 实例对象
     * @return 实例对象
     */
    Department insert(Department department);

    /**
     * 修改数据
     *
     * @param department 实例对象
     * @return 实例对象
     */
    Department update(Department department);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    boolean deleteById(Integer id);

}
