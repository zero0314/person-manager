package com.entity;

import java.util.Date;
import java.io.Serializable;

/**
 * 部门表(Department)实体类
 *
 * @author makejava
 * @since 2023-04-28 14:52:51
 */
public class Department implements Serializable {
    private static final long serialVersionUID = 222040027117810730L;
    /**
     * 主键
     */
    private Integer id;
    /**
     * 名称
     */
    private String name;
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

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    @Override
    public String toString() {
        return "Department{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", createtime=" + createtime +
                '}';
    }
}

