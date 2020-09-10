from selenium import webdriver
import time

url= ''

driver = webdriver.Chrome('Enter chromedriver location here')
driver.get(url)

#click on bar
driver.find_element_by_xpath('').click()
time.sleep(3)

#click by class
driver.find_element_by_class_name('').click()
time.sleep(3)

#click by id
driver.find_element_by_id('').click()
time.sleep(3)

#fill out forms
driver.find_element_by_id('').send_keys('')
driver.find_element_by_id('').send_keys('')

#click submit
driver.find_element_by_class_name('').click()
time.sleep(3)

