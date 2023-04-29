package com.controller;

import com.annotation.IgnoreAuth;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.entity.XinchoujiluEntity;
import com.entity.view.XinchoujiluView;
import com.service.XinchoujiluService;
import com.utils.MPUtil;
import com.utils.PageUtils;
import com.utils.R;
import org.apache.poi.hssf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 薪酬记录
 * 后端接口
 *
 * @author
 * @email
 * @date 2023-03-10 18:22:47
 */
@RestController
@RequestMapping("/xinchoujilu")
public class XinchoujiluController {
    @Autowired
    private XinchoujiluService xinchoujiluService;

    @RequestMapping("export")
    @IgnoreAuth
    public void export(@RequestBody XinchoujiluEntity xinchoujilu, HttpServletResponse response) throws IOException {
        //查询结果
        List<XinchoujiluEntity> list = xinchoujiluService.queryAll(xinchoujilu);
        //1、创建一个webbook，表示一个Excel文件
        HSSFWorkbook wb = new HSSFWorkbook();
        //2、在Excel文件中添加一个sheet页
        HSSFSheet sheet = wb.createSheet("薪酬记录");
        //3、在sheet页中添加表头，第一行
        HSSFRow row = sheet.createRow(0);
        //4、设置单元格的样式
        HSSFCellStyle style = wb.createCellStyle();
        //设置样式居中
        style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
        //5、创建单元格，并设置居中样式
        HSSFCell cell;
        {
            cell = row.createCell(0);
            cell.setCellValue("排序");
            cell.setCellStyle(style);
            cell = row.createCell(1);
            cell.setCellValue("月份");
            cell.setCellStyle(style);
            cell = row.createCell(2);
            cell.setCellValue("工号");
            cell.setCellStyle(style);
            cell = row.createCell(3);
            cell.setCellValue("姓名");
            cell.setCellStyle(style);
            cell = row.createCell(4);
            cell.setCellValue("部门");
            cell.setCellStyle(style);
            cell = row.createCell(5);
            cell.setCellValue("手机");
            cell.setCellStyle(style);
            cell = row.createCell(6);
            cell.setCellValue("岗位");
            cell.setCellStyle(style);
            cell = row.createCell(7);
            cell.setCellValue("基本工资");
            cell.setCellStyle(style);
            cell = row.createCell(8);
            cell.setCellValue("全勤奖励");
            cell.setCellStyle(style);
            cell = row.createCell(9);
            cell.setCellValue("其他补助");
            cell.setCellStyle(style);
            cell = row.createCell(10);
            cell.setCellValue("扣款事项");
            cell.setCellStyle(style);
            cell = row.createCell(11);
            cell.setCellValue("扣款金额");
            cell.setCellStyle(style);
            cell = row.createCell(12);
            cell.setCellValue("实发工资");
            cell.setCellStyle(style);
            cell = row.createCell(13);
            cell.setCellValue("登记时间");
            cell.setCellStyle(style);
        }
        for (int i = 0; i < 20; i++) {
            sheet.setColumnWidth(i, 15 * 256);
        }
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        for (int i = 0; i < list.size(); i++) {
            row = sheet.createRow(i + 1);
            XinchoujiluEntity jilu = list.get(i);
            HSSFCell cell1 = row.createCell(0);
            cell1.setCellValue(i + 1);
            cell1.setCellStyle(style);
            HSSFCell cell2 = row.createCell(1);
            cell2.setCellValue(jilu.getYuefen());
            cell2.setCellStyle(style);
            HSSFCell cell3 = row.createCell(2);
            cell3.setCellValue(jilu.getYuangonggonghao());
            cell3.setCellStyle(style);
            HSSFCell cell4 = row.createCell(3);
            cell4.setCellValue(jilu.getYuangongxingming());
            cell4.setCellStyle(style);

            HSSFCell cell6 = row.createCell(4);
            cell6.setCellValue(jilu.getBumen());
            cell6.setCellStyle(style);
            HSSFCell cell7 = row.createCell(5);
            cell7.setCellValue(jilu.getShoujihao());
            cell7.setCellStyle(style);
            HSSFCell cell8 = row.createCell(6);
            cell8.setCellValue(jilu.getGangwei());
            cell8.setCellStyle(style);
            HSSFCell cell9 = row.createCell(7);
            cell9.setCellValue(jilu.getJibengongzi());
            cell9.setCellStyle(style);
            HSSFCell cell10 = row.createCell(8);
            cell10.setCellValue(jilu.getQuanqinjiangli());
            cell10.setCellStyle(style);
            HSSFCell cell11 = row.createCell(9);
            cell11.setCellValue(jilu.getQitabuzhu());
            cell11.setCellStyle(style);
            HSSFCell cell12 = row.createCell(10);
            cell12.setCellValue(jilu.getKoukuanshixiang());
            cell12.setCellStyle(style);
            HSSFCell cell13 = row.createCell(11);
            cell13.setCellValue(jilu.getKoukuanjine());
            cell13.setCellStyle(style);
            HSSFCell cell14 = row.createCell(12);
            cell14.setCellValue(jilu.getShifagongzi());
            cell14.setCellStyle(style);
            HSSFCell cell15 = row.createCell(13);
            cell15.setCellValue(format.format(jilu.getDengjishijian()));
            cell15.setCellStyle(style);
        }
        try {
            //6、设置请求头
            response.addHeader("Content-Disposition", "attachment;fileName=" + "Excel.xls");
            //7、将excel写到响应体的输出流中
            File file = new File("D://123.xls");
            FileOutputStream stream = new FileOutputStream(file);

            OutputStream out = response.getOutputStream();
            wb.write(stream);

            wb.write(out);
            wb.close();

            stream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params, XinchoujiluEntity xinchoujilu, HttpServletRequest request) {
        String tableName = request.getSession().getAttribute("tableName").toString();
        if (tableName.equals("yuangong")) {
            xinchoujilu.setYuangonggonghao((String) request.getSession().getAttribute("username"));
        }
        EntityWrapper<XinchoujiluEntity> ew = new EntityWrapper<XinchoujiluEntity>();

        PageUtils page = xinchoujiluService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, xinchoujilu), params), params));

        return R.ok().put("data", page);
    }

    /**
     * 前端列表
     */
    @IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params, XinchoujiluEntity xinchoujilu, HttpServletRequest request) {
        EntityWrapper<XinchoujiluEntity> ew = new EntityWrapper<XinchoujiluEntity>();

        PageUtils page = xinchoujiluService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, xinchoujilu), params), params));
        return R.ok().put("data", page);
    }

    /**
     * 列表
     */
    @RequestMapping("/lists")
    public R list(XinchoujiluEntity xinchoujilu) {
        EntityWrapper<XinchoujiluEntity> ew = new EntityWrapper<XinchoujiluEntity>();
        ew.allEq(MPUtil.allEQMapPre(xinchoujilu, "xinchoujilu"));
        return R.ok().put("data", xinchoujiluService.selectListView(ew));
    }

    /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(XinchoujiluEntity xinchoujilu) {
        EntityWrapper<XinchoujiluEntity> ew = new EntityWrapper<XinchoujiluEntity>();
        ew.allEq(MPUtil.allEQMapPre(xinchoujilu, "xinchoujilu"));
        XinchoujiluView xinchoujiluView = xinchoujiluService.selectView(ew);
        return R.ok("查询薪酬记录成功").put("data", xinchoujiluView);
    }

    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id) {
        XinchoujiluEntity xinchoujilu = xinchoujiluService.selectById(id);
        return R.ok().put("data", xinchoujilu);
    }

    /**
     * 前端详情
     */
    @IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id) {
        XinchoujiluEntity xinchoujilu = xinchoujiluService.selectById(id);
        return R.ok().put("data", xinchoujilu);
    }


    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody XinchoujiluEntity xinchoujilu, HttpServletRequest request) {
        xinchoujilu.setId(new Date().getTime() + new Double(Math.floor(Math.random() * 1000)).longValue());
        //ValidatorUtils.validateEntity(xinchoujilu);
        xinchoujiluService.insert(xinchoujilu);
        return R.ok();
    }

    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody XinchoujiluEntity xinchoujilu, HttpServletRequest request) {
        xinchoujilu.setId(new Date().getTime() + new Double(Math.floor(Math.random() * 1000)).longValue());
        //ValidatorUtils.validateEntity(xinchoujilu);
        xinchoujiluService.insert(xinchoujilu);
        return R.ok();
    }


    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody XinchoujiluEntity xinchoujilu, HttpServletRequest request) {
        //ValidatorUtils.validateEntity(xinchoujilu);
        xinchoujiluService.updateById(xinchoujilu);//全部更新
        return R.ok();
    }


    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids) {
        xinchoujiluService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }

    /**
     * 提醒接口
     */
    @RequestMapping("/remind/{columnName}/{type}")
    public R remindCount(@PathVariable("columnName") String columnName, HttpServletRequest request, @PathVariable("type") String type, @RequestParam Map<String, Object> map) {
        map.put("column", columnName);
        map.put("type", type);

        if (type.equals("2")) {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Calendar c = Calendar.getInstance();
            Date remindStartDate = null;
            Date remindEndDate = null;
            if (map.get("remindstart") != null) {
                Integer remindStart = Integer.parseInt(map.get("remindstart").toString());
                c.setTime(new Date());
                c.add(Calendar.DAY_OF_MONTH, remindStart);
                remindStartDate = c.getTime();
                map.put("remindstart", sdf.format(remindStartDate));
            }
            if (map.get("remindend") != null) {
                Integer remindEnd = Integer.parseInt(map.get("remindend").toString());
                c.setTime(new Date());
                c.add(Calendar.DAY_OF_MONTH, remindEnd);
                remindEndDate = c.getTime();
                map.put("remindend", sdf.format(remindEndDate));
            }
        }

        Wrapper<XinchoujiluEntity> wrapper = new EntityWrapper<XinchoujiluEntity>();
        if (map.get("remindstart") != null) {
            wrapper.ge(columnName, map.get("remindstart"));
        }
        if (map.get("remindend") != null) {
            wrapper.le(columnName, map.get("remindend"));
        }

        String tableName = request.getSession().getAttribute("tableName").toString();
        if (tableName.equals("yuangong")) {
            wrapper.eq("yuangonggonghao", (String) request.getSession().getAttribute("username"));
        }

        int count = xinchoujiluService.selectCount(wrapper);
        return R.ok().put("count", count);
    }

    /**
     * 分组统计
     */
    //分组统计，ColumnName，接收前端传过来的求职日期
    // 把其字段名放入到params里，传入到对应方法selectGroup里，查询结果，把结果集返回给前端，
    @RequestMapping("/group/{columnName}")
    public R group(@PathVariable("columnName") String columnName, HttpServletRequest request) {
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("column", columnName);
        EntityWrapper<XinchoujiluEntity> ew = new EntityWrapper<XinchoujiluEntity>();
        List<Map<String, Object>> result = xinchoujiluService.selectGroup(params, ew);
        //遍历，把date时间类型转换为字符串类型
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for (Map<String, Object> m : result) {
            for (String k : m.keySet()) {
                if (m.get(k) instanceof Date) {
                    m.put(k, sdf.format((Date) m.get(k)));
                }
            }
        }
        return R.ok().put("data", result);
    }
}
