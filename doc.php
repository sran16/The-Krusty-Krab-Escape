<!-- <?php


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="test">
    </div>

</body>

</html>
<script>

    function getName() {
        fetch("getName.php")
            .then((response) => {
                if (!response) {
                    throw new Error("Something went wrong !");
                }
                let parsedResponse = response.json();
                return parsedResponse
            })
            .then((data) => {
                console.log(data);
                return data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    getName();
    function createNewName(name) {
        let url = "createNewName.php";
        let formData = new formData();
        formData.append("newLineName", name);
        fetch(url, { method: 'post', body: formData })
            .then((response) => {
                console.log(response.text);
                return response.text
            })
            .then(function (body)) {
            console.log(body);
        }
    }
    createNewName("Nouveau name");
</script> -->