import pyautogui
import time

pyautogui.click()
distance = 100 

while distance >0
	pyautogui.dragRel(distance,0,duration=0.5)
	distance = distance - 20
	
	pyautogui.dragRel(0,distance,duration=0.5)
	distance = distance - 20
	
	pyautogui.dragRel(-distance,0,duration=0.5)
	distance = distance - 20
	
	pyautogui.dragRel(0,-distance,duration=0.5)
	distance = distance - 20