package com.annotation;

import java.lang.annotation.*;

/**
 * 忽略Token验证
 * @author yh
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface IgnoreAuth {

}
