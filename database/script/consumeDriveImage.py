import requests

class consumeDriveImage:
    link = ""
  def __init__(self, url):
    self.link = url

  def getToken(self,response):
    for key, value in response.cookies.items():
      if key.startswith('download_warning')
        return value
    return none
  def getImage(self, id):
    session = requests.Session()
    response = session.get(url, params = { 'id' : id }, stream = True)
    token = self.getToken(response)
    if token:
      params = { 'id' : id, 'confirm' : token }
      response = session.get(self.link, params = params, stream = True)

  def saveImg(self, reponse, destination):
    CHUNK_SIZE = 32768
    with open(destination, "wb") as file:
      for chunk in  response.iter_content(CHUNK_SIZE):
        if chunk:
          file.write(chunk)
  def getDestination(self):
    pass

