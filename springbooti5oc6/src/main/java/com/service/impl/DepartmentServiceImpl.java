package com.service.impl;

import com.entity.Department;
import com.dao.DepartmentDao;
import com.service.DepartmentService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

/**
 * 部门表(Department)表服务实现类
 *
 * @author makejava
 * @since 2023-04-28 14:52:51
 */
@Service("departmentService")
public class DepartmentServiceImpl implements DepartmentService {
    @Resource
    private DepartmentDao departmentDao;

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public Department queryById(Integer id) {
        return this.departmentDao.queryById(id);
    }

    /**
     * 分页查询
     *
     * @param department 筛选条件
     * @param size
     * @return 查询结果
     */
    @Override
    public List<Department> queryPage(Department department, Integer page, Integer size) {
        System.out.println(department);
        return departmentDao.queryAllByLimit(department, (page - 1) * size, size);
    }

    /**
     * 查询列表
     *
     * @param department 筛选条件
     * @return 对象列表
     */
    @Override
    public List<Department> queryAll(Department department) {
        return departmentDao.queryAll(department);
    }

    /**
     * 统计总行数
     *
     * @param department 查询条件
     * @return 总行数
     */
    @Override
    public long count(Department department) {
        return departmentDao.count(department);
    }

    /**
     * 新增数据
     *
     * @param department 实例对象
     * @return 实例对象
     */
    @Override
    public Department insert(Department department) {
        department.setCreatetime(new Date());
        this.departmentDao.insert(department);
        return department;
    }

    /**
     * 修改数据
     *
     * @param department 实例对象
     * @return 实例对象
     */
    @Override
    public Department update(Department department) {
        this.departmentDao.update(department);
        return this.queryById(department.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer id) {
        return this.departmentDao.deleteById(id) > 0;
    }
}
