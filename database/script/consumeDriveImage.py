import requests
import os
import io
import pickle
from googleapiclient.http import MediaIoBaseDownload 
import google_auth_oauthlib.flow 
from google.auth.transport.requests import Request 
from google_auth_oauthlib.flow import InstalledAppFlow 
from googleapiclient.discovery import build 



class DriveImage:

  def __init__(self, url, name, type_name):
    SCOPES = ["https://www.googleapis.com/auth/drive.readonly"] 
    CLIENT_SECRET_FILE = "/home/monkey/Desktop/pioneiras/UpdatePioneers/credentials.json"   
    credentials = self.auth(client_secret_filename=CLIENT_SECRET_FILE, scopes=SCOPES)
    self.link = url
    self.name = name
    self.type_name = type_name
    self.drive = build('drive', 'v3', credentials=credentials) 

  def auth(self, client_secret_filename, scopes):
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('/home/monkey/Desktop/pioneiras/UpdatePioneers/token.pickle'):
      with open('/home/monkey/Desktop/pioneiras/UpdatePioneers/token.pickle', 'rb') as token:
        creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
      if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
      else:
        flow = InstalledAppFlow.from_client_secrets_file(client_secret_filename, scopes)
        creds = flow.run_local_server()
      # Save the credentials for the next run
      with open('/home/monkey/Desktop/pioneiras/UpdatePioneers/token.pickle', 'wb') as token:
        pickle.dump(creds, token)
    return creds
  def main(self):
    id = self.getID()
    return self.getImage(id)
     

  def getImage(self, id):
    request = self.drive.files().get_media(fileId=id) 
    file = io.BytesIO() 
    downloader = MediaIoBaseDownload(file, request) 
    done = False 
    while done is False: 
      status, done = downloader.next_chunk() 

    head = self.getDestination()
    return self.saveImg(file, head)
    

  def saveImg(self, file, destination):
    file.seek(0)
    with open(destination,"wb") as f: 
      for chunk in file: 
        if chunk: 
          f.write(chunk) 
      return destination

  def getDestination(self):
    dir_pioneer =  "../assets/pioneiras/"+ self.name
    if ~os.path.exists(dir_pioneer):
      try:
        os.mkdir("../"+dir_pioneer)
      except OSError:
        print("OSError: error to create directory {} ".format(dir_pioneer))
    
    dir_pioneer += "/" + self.type_name 
    return dir_pioneer

  def getID(self):
    equal = self.link.find('=')
    id = self.link[equal+1:]
    return id

