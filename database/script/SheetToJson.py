import gspread 
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
import requests
import json
from database import CurrentDataBase 


class SheetToJson:
  data = 0
  headers = 0
  pioneers = 0
  """
  def __init__(self):
    #url's for get Pioneras's sheet
	scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
	#directory of API key file
	file_name = "/home/monkey/Desktop/pioneiras/UpdatePioneers/pioneiras-key.json"
	#directory of current pioneers data
	
	#getting remote pioneers data from google sheets 
	self.getSheet(file_name, scope)
	#removing the headers
	headers = self.data.pop(0)
	#getting the current data of pioneers
	
  """
  def getSheet(file_name, scope):
    credentials = ServiceAccountCredentials.from_json_keyfile_name(file_name, scope)    
    gc = gspread.authorize(credentials)
    wks = gc.open('Pioneiras').sheet1
    self.data = wks.get_all_values()

  def makeJson(self):
    df = pd.DataFrame(data, columns=headers)


