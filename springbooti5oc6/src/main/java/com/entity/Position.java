package com.entity;

import java.util.Date;
import java.io.Serializable;

/**
 * 岗位表(Position)实体类
 *
 * @author makejava
 * @since 2023-04-28 14:52:51
 */
public class Position implements Serializable {
    private static final long serialVersionUID = 908107303416104446L;
    /**
     * 主键
     */
    private Integer id;
    /**
     * 名称
     */
    private String name;
    /**
     * 部门id
     */
    private Integer departmentid;
    /**
     * 操作时间
     */
    private Date createtime;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getDepartmentid() {
        return departmentid;
    }

    public void setDepartmentid(Integer departmentid) {
        this.departmentid = departmentid;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    @Override
    public String toString() {
        return "Position{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", departmentid=" + departmentid +
                ", createtime=" + createtime +
                '}';
    }
}

