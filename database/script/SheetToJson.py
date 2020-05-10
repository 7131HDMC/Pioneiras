import gspread 
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
import requests
import json

class SheetToJson:
  data = 0
  headers = 0
  pioneers = 0
  def __init__(self):
	scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
	file_name = "/home/monkey/Desktop/pioneiras/UpdatePioneers/pioneiras-key.json"
	credentials = ServiceAccountCredentials.from_json_keyfile_name(file_name, scope)
	gc = gspread.authorize(credentials)
	wks = gc.open('Pioneiras').sheet1
	self.data = wks.get_all_values()
	headers = data.pop(0)


  def makeJson(self):
  	df = pd.DataFrame(data, columns=headers)

  def getData():
  	with open('../database_pioneiras.js') as arq:
  	  arq_str = arq.read()	
      
      #delete all the isn't that json data  
      #tudo antes de {
      key = arq_str.find('{')
      rest = arq_str[:key]
      arq_str = arq_str.replace(rest,'')
      #tudo apos ;, incluso
      key = arq_str.find(';')
      rest = arq_str[key:]
      arq_str = arq_str.replace(rest,'')
      #retirrar o reuire -> make a func
