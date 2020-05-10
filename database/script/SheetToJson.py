import gspread 
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
import requests
import json

class SheetToJson:
  data = 0
  headers = 0
  __init__(self):
    scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
    file_name = "../../../UpdatePioneers/pioneiras-key.json"
    credentials = ServiceAccountCredentials.from_json_keyfile_name(file_name, scope)
    gc = gspread.authorize(credentials)
    wks = gc.open('Pioneiras').sheet1
    self.data = wks.get_all_values()
    headers = data.pop(0)


  def changeHeaders(self):
  	df = pd.DataFrame(data, columns=headers)