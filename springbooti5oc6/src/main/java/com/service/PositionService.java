package com.service;

import com.entity.Position;
import java.util.List;

/**
 * 岗位表(Position)表服务接口
 *
 * @author makejava
 * @since 2023-04-28 14:52:51
 */
public interface PositionService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Position queryById(Integer id);

    /**
     * 分页查询
     *
     * @param position 筛选条件
     * @return 查询结果
     */
    List<Position> queryPage( Position position,  Integer offset, Integer size);

    /**
     * 查询列表
     * @param position 查询条件
     * @return 对象列表
     */
    List<Position> queryAll(Position position);

    /**
     * 统计总行数
     *
     * @param position 查询条件
     * @return 总行数
     */
    long count(Position position);

    /**
     * 新增数据
     *
     * @param position 实例对象
     * @return 实例对象
     */
    Position insert(Position position);

    /**
     * 修改数据
     *
     * @param position 实例对象
     * @return 实例对象
     */
    Position update(Position position);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    boolean deleteById(Integer id);

}
