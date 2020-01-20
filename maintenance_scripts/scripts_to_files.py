import yaml

folder = r"..\scripts"

with open(r"..\config_files\scripts.yaml") as file:
    script_list = yaml.load(file, Loader=yaml.FullLoader)
    for s, v in script_list.items():
        name = (
            v["alias"].lower().replace(" - ", "_").replace(" ", "_").replace("-", "_")
        )
        print(name)

        path = "{}/{}.yaml".format(folder, name)
        # new_a = a
        # new_a.pop("id", None)

        with open(path, "w") as file:
            documents = yaml.dump(v, file)
