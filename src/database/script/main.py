from SheetToJson import SheetToJson  
from Remote import UpdateRemote

sheet = SheetToJson()
sheet.loop()
git = UpdateRemote()
git.gitPush()