package com.dao;

import com.entity.Department;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 部门表(Department)表数据库访问层
 *
 * @author makejava
 * @since 2023-04-28 14:52:51
 */
public interface DepartmentDao {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Department queryById(Integer id);

    /**
     * 查询指定行数据
     *
     * @param department 查询条件
     * @return 对象列表
     */
    List<Department> queryAllByLimit(@Param("entity") Department department, @Param("offset") Integer offset, @Param("size") Integer size);

    /**
     * 查询列表
     * @param department 查询条件
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
     * @return 影响行数
     */
    int insert(Department department);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<Department> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<Department> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<Department> 实例对象列表
     * @return 影响行数
     * @throws org.springframework.jdbc.BadSqlGrammarException 入参是空List的时候会抛SQL语句错误的异常，请自行校验入参
     */
    int insertOrUpdateBatch(@Param("entities") List<Department> entities);

    /**
     * 修改数据
     *
     * @param department 实例对象
     * @return 影响行数
     */
    int update(Department department);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 影响行数
     */
    int deleteById(Integer id);

}

