import os

class UpdateRemote:

  gitAdd(self):
  	path = ' ../database_pioneiras.js'
  	command = 'git add '
 	_add = command + path
 	os.system(_add)

  gitCommit(self):
  	text = ' Update database of women'
  	command = 'git commit -m '
  	_commit = command + text
  	os.system(_commit)

  gitPush(self):
    self.gitAdd()
  	self.gitCommit()
  	command = 'git push'
  	os.system(command)
