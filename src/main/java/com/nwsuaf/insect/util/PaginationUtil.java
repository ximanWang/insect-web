package com.nwsuaf.insect.util;

import java.util.Date;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.util.CollectionUtils;

import com.nwsuaf.insect.dto.Pagination;

/**
 * 分页信息封装对象
 * @author ximan
 *
 */
public class PaginationUtil {
	public static final String DEFULT_DATE_FORMAT = "yyyy-MM-dd";


    public static void initDateQueryCondition(Pagination pagination) {
        if (null == pagination) {
            return;
        }
        Map<?, ?> conditionMap = pagination.getCondition();
        if (!CollectionUtils.isEmpty(conditionMap) && conditionMap.containsKey("endDate")) {
            String dateEndStr = (String) pagination.getCondition().get("endDate");
            try {
                if (!StringUtils.isEmpty(dateEndStr)) {
                    Date date = DateUtil.formatString(dateEndStr, DateUtil.DEFAULT_DATE_PATTERN);

                    Date endDate = DateUtil.getAfterDays(date, 1);
                    String endDateStr = DateUtil.formatDate(endDate);
                    pagination.getCondition().put("endDate", endDateStr);
                }
            } catch (Exception e) {

            }
        }

    }

    public static void initStartEndDateByInputDate(Pagination pagination, String dateName, String format) {
        if (null == pagination || StringUtils.isBlank(dateName)) {
            return;
        }
        Map<?, ?> conditionMap = pagination.getCondition();
        if (!CollectionUtils.isEmpty(conditionMap) && conditionMap.containsKey(dateName)) {
            String inputDate = (String) pagination.getCondition().get(dateName);
            try {
                if (!StringUtils.isBlank(inputDate)) {
                    Date date = DateUtil.formatString(inputDate, format);

                    Date endDate = DateUtil.getAfterDays(date, 1);
                    String endDateStr = DateUtil.formatDate(endDate);
                    pagination.getCondition().put("startDate", inputDate);
                    pagination.getCondition().put("endDate", endDateStr);
                }
            } catch (Exception e) {
    		
            }
        }
    }
    
    public static void convertString2Date(Pagination pagination, String dateName, String format) {
        if (null == pagination || StringUtils.isBlank(dateName)) {
            return;
        }
        Map<?, ?> conditionMap = pagination.getCondition();
        if (!CollectionUtils.isEmpty(conditionMap) && conditionMap.containsKey(dateName)) {
            String inputDate = (String) pagination.getCondition().get(dateName);
            try {
                if (!StringUtils.isBlank(inputDate)) {
                    Date date = DateUtil.formatString(inputDate, format);

                    pagination.getCondition().put(dateName, date);
                }
            } catch (Exception e) {

            }
        }
    }
}
