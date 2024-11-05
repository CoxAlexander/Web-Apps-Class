import pyautogui
import time
base = "fig2-"
counter = 7
time.sleep(5)
pyautogui.typewrite("clear")
pyautogui.press("enter")
time.sleep(5)
while True:
    pyautogui.typewrite("node " + base + counter + ".js")
    pyautogui.press("enter")
    time.sleep(2)
    pyautogui.screenshot(base+counter+".png")
    counter +=1
    pyautogui.typewrite("clear")
    pyautogui.press("enter")