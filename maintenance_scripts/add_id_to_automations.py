import yaml
from pathlib import Path
from uuid import uuid4


folder = "automations"
automations = list(Path(folder).rglob("*.yaml"))

for automation in automations:
    try:
        print(f"Adding id to {automation}")
        with open(automation, "r") as file:
            automation_dict = yaml.load(file, Loader=yaml.FullLoader)
            automation_dict["id"] = uuid4().hex 
        with open(automation, "w") as file:
            yaml.dump(automation_dict, file)
    except yaml.constructor.ConstructorError:
        print(f"Can't add if to {automation}, manually set id to {uuid4().hex}")
