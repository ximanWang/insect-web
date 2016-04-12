package com.nwsuaf.insect.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;
/**
 * 日期处理工具
 * @author ximan
 *
 */
public class DateUtil {
	public static final String EMPTY = "";
	public static final String DATEFORMAT = "MM/dd/yyyy";
	public static final String DeliveryDATEFORMAT = "MM/dd/yy";
	public static final String DATETIMEFORMAT = "yyyy-MM-dd HH:mm:ss";
	public static final String DATETIMEFORMATMINUTE = "yyyy-MM-dd HH:mm";
	public static final String MONTHFORMAT = "yyyy-MM";
	public static final String YEARMINUTE = "MM/dd/yyyy HH:mm";
	public static final String MINUTE = "HH:mm";
	public static final String ACCESSDATAFORMAT = "yyyy/MM/dd HH:mm:ss";
	public static final String DEFAULT_DATE_PATTERN = "yyyy-MM-dd";
	public static final String MERGE_DATE_PATTERN = "yyyyMMdd";
	public static final String DATEUPLOADFORMAT = "yyyyMMddHHmmss";
	public static final String SECOND = "HH:mm:ss";
	public static final String CRON_EXPRESSION = "s m H d M ? yyyy";
	public static final String SAP_FORMAT = "yyyyMMdd";
	
	public static Date getDate(Date date, int interval, int hour) {
		Calendar rightNow = Calendar.getInstance();
		rightNow.setTime(date);
		rightNow.add(Calendar.DATE, interval);
		rightNow.set(Calendar.HOUR_OF_DAY, hour);
		rightNow.set(Calendar.MINUTE, 0);
		rightNow.set(Calendar.SECOND, 0);
		return rightNow.getTime();
	}
	
	/**
	 * 
	 * description:将日期字符串按特定的格式转为Date对象 data 2012-11-12 user Janlu.Zhu
	 * 
	 * @param dateString
	 *            :日期字符串
	 * @param dateFormat
	 *            :日期格式
	 * @return
	 * @throws ParseException
	 */
	public static Date formatString(String dateString, String dateFormat) throws ParseException {
		DateFormat df = new SimpleDateFormat(dateFormat);
		try {
			return df.parse(dateString);
		} catch (ParseException e) {
			throw new ParseException("日期格式错误", 0);
		}
	}
	
	public static Date getIntervalDate(Date oldDate, int intervalHour) {
        long millisecond = oldDate.getTime() + intervalHour * 60 * 60 * 1000;

        return new Date(millisecond);
    }

	public static Date formatString(String dateString) throws ParseException {
		return formatString(dateString, DEFAULT_DATE_PATTERN);
	}

	/**
	 * 
	 * description:将日期对象转为特定的日期字符串 data 2012-11-12 user Janlu.Zhu
	 * 
	 * @param date
	 * @param strFormat
	 * @return
	 */
	public static String formatDate(Date date, String strFormat) {
		if (date == null) {
			return EMPTY;
		}
		DateFormat df = new SimpleDateFormat(strFormat);
		return df.format(date);
	}

	public static String formatDate(Date date) {
		return formatDate(date, DEFAULT_DATE_PATTERN);
	}
	
	public static String mergeDate(Date date) {
		return formatDate(date, MERGE_DATE_PATTERN);
	}

	public static int getCurrentYear() {
		return Calendar.getInstance().get(Calendar.YEAR);
	}

	public static Date formateAddOneDate(String dateString) throws ParseException {
		Date date = formatString(dateString);
		Date addOneDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
		return addOneDate;
	}

	public static String getCurrentDateFormatString() {
		return UUID.randomUUID().toString() + DateUtil.formatDate(new Date(), DateUtil.DATEUPLOADFORMAT);
	}

	public static long getMinuxTimeToNow(Date date){
		Date now=new Date();
		return now.getTime()-date.getTime();
	}
	
	public static long getDateTime(int dates){
		return dates*24*60*60*1000;
	}

	public static Date getFirstDate(int year,int month){
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.YEAR, year);
		cal.set(Calendar.MONTH, month-1);
		cal.set(Calendar.DAY_OF_MONTH, cal.getMinimum(Calendar.DATE));
		cal.set(Calendar.HOUR_OF_DAY, 0);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.SECOND, 0);
		
		return cal.getTime();
	}
	
	public static Date getLastDate(int year,int month){
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.YEAR, year);
		cal.set(Calendar.MONTH, month-1);
		cal.set(Calendar.DAY_OF_MONTH, 1);
		int value = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
		cal.set(Calendar.DAY_OF_MONTH, value);
		cal.set(Calendar.HOUR_OF_DAY, 23);
		cal.set(Calendar.MINUTE, 59);
		cal.set(Calendar.SECOND, 59);
		
		return cal.getTime();
	}
	public static int getLocalYearWeekth(Date date) throws ParseException{
		Calendar c = Calendar.getInstance();
		c.setFirstDayOfWeek(Calendar.MONDAY);
		c.setTime(DateUtil.formatString(DateUtil.formatDate(date)));
		return c.get(Calendar.WEEK_OF_YEAR);
		
	}
	public static Date getAfterDays(Date date,int i){
		Date resultDate=null;
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		c.add(Calendar.DAY_OF_YEAR, i);
		resultDate=c.getTime();
		return resultDate;
	}
	
	/**
	 * 返回几小时后或之前的时间
	 * @param date
	 * @param i
	 * @return
	 * @author thunder.Yang
	 * @date 2015年3月18日
	 */
	public static Date getAfterHours(Date date,int i){
		Date resultDate=null;
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		c.add(Calendar.HOUR_OF_DAY, i);
		resultDate=c.getTime();
		return resultDate;
	}
	
	public static Date str2Date(String str) {
		Date date = null;
		try {
			date = new SimpleDateFormat(DEFAULT_DATE_PATTERN).parse(str);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return date;
	}
}
