package com.service.impl;

import com.dao.PositionDao;
import com.entity.Position;
import com.service.PositionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

/**
 * 岗位表(Position)表服务实现类
 *
 * @author makejava
 * @since 2023-04-28 14:52:51
 */
@Service("positionService")
public class PositionServiceImpl implements PositionService {
    @Resource
    private PositionDao positionDao;

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    @Override
    public Position queryById(Integer id) {
        return this.positionDao.queryById(id);
    }

    /**
     * 分页查询
     *
     * @param position 筛选条件
     * @param size
     * @return 查询结果
     */
    @Override
    public List<Position> queryPage(Position position, Integer page, Integer size) {
        return positionDao.queryAllByLimit(position, (page - 1) * size, size);
    }

    /**
     * 查询列表
     *
     * @param position 查询条件
     * @return 对象列表
     */
    @Override
    public List<Position> queryAll(Position position) {
        return positionDao.queryAll(position);
    }

    /**
     * 统计总行数
     *
     * @param position 查询条件
     * @return 总行数
     */
    @Override
    public long count(Position position) {
        return positionDao.count(position);
    }

    /**
     * 新增数据
     *
     * @param position 实例对象
     * @return 实例对象
     */
    @Override
    public Position insert(Position position) {
        position.setCreatetime(new Date());
        this.positionDao.insert(position);
        return position;
    }

    /**
     * 修改数据
     *
     * @param position 实例对象
     * @return 实例对象
     */
    @Override
    public Position update(Position position) {
        this.positionDao.update(position);
        return this.queryById(position.getId());
    }

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer id) {
        return this.positionDao.deleteById(id) > 0;
    }
}
