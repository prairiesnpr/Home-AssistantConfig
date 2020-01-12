import yaml

folder = "automations"

with open("automations.yaml") as file:
    automations_list = yaml.load(file, Loader=yaml.FullLoader)
    for a in automations_list:
        print(a["id"])
        path = "{}/{}.yaml".format(folder, a["id"].lower())
        new_a = a
        new_a.pop("id", None)

        with open(path, "w") as file:
            documents = yaml.dump(new_a, file)
